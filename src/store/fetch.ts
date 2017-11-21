import merge from 'lodash/merge';
import isPlainObject from 'lodash/isPlainObject';
import { compile } from 'path-to-regexp';
import { stringify } from 'query-string';

interface IFetchInit extends RequestInit {
  params?: object;
  timeout?: number | boolean;
}
interface IFetchRequest {
  url: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';
}
/**
 * default RequestInit
 */
const defaultInit = {
  headers: {
    'Content-Type': 'application/json'
  }
};

/**
 * fetch timeout
 */
const defaultTimeout: number = 10 * 1000;
function fetchTimeout(time: number = defaultTimeout): Promise<Response> {
  const response = new Response(JSON.stringify({
    code: 408,
    msg: '超时，请稍后再试',
    result: null
  }));

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(response);
    }, time);
  });
}

/**
 * 处理 fetch 参数
 */
export function fetchParamParser(config: IFetchRequest, init?: IFetchInit): [string, IFetchInit] {
  let { url } = config;
  const { method } = config;

  // 解析 url
  if (url.includes(':') && init && init.params) {
    let path;
    let queryStirng;

    // 处理 query string 和 path-to-regexp 的冲突
    if (url.includes('?')) {
      [path, queryStirng] = url.split('?');
    } else {
      path = url;
      queryStirng = '';
    }

    url = compile(path)(init.params);

    if (queryStirng) {
      url = `${url}?${queryStirng}`;
    }
  }

  // query string
  if (['GET', 'DELETE'].includes(method) && init && init.body) {
    const query = stringify(init.body);

    url = url.includes('?')
      ? `${url}&${query}`
      : `${url}?${query}`;
  }

  // stringify body
  if (!['GET', 'DELETE'].includes(method) && init && init.body && isPlainObject(init.body)) {
    init.body = JSON.stringify(init.body);
  }

  // merge init
  init = merge({ method }, defaultInit, init);

  return [url, init as IFetchInit];
}

export function fetch(config: IFetchRequest, init?: IFetchInit): Promise<any> {
  const { method } = config;

  // parser param
  const [url, newInit] = fetchParamParser(config, init);

  // 超时处理
  let request: Promise<any>;
  if (newInit.timeout === false) {
    request = window.fetch(url, newInit);
  } else {
    const timeout = typeof newInit.timeout === 'number'
      ? newInit.timeout
      : defaultTimeout;

    request = Promise.race([
      window.fetch(url, newInit),
      fetchTimeout(timeout)
    ]);
  }

  return request
    .then(response => {
      // fetch 异常处理
      return response.ok ? response.json() : {
        code: response.status,
        msg: response.statusText,
        result: null
      };
    })
    .then(responseData => {
      // 全局统一的 Fetch Notify
      const { code, msg, result } = responseData;

      let nextData;

      if (code < 300 && method !== 'GET') {
        // todo
        nextData = result;
      } else if (code >= 300) {
        // todo
        nextData = Promise.reject(msg);
      } else {
        nextData = result;
      }

      return nextData;
    })
    .then(responseData => {
      return responseData;
    });
}

export default fetch;

