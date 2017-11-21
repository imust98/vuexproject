import { GET_USER_LIST } from './mutation-types';
import fetch from './fetch';
const actions = {
  GET_USER_LIST({ commit }: { commit: any }) {
    fetch({
      url: '/api/users/:id',
      method: 'GET'
    }, {
        params: {
          id: 112
        }
      }).then((result: any) => {
        console.log(result);
        commit('USER_LIST_LOAD', {
          list: result
        });
      });
  }
};
export default actions;
