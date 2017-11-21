import { GET_USER_LIST } from './mutation-types';
import fetch from './fetch';
const actions = {
  GET_USER_LIST() {
    // todo
    fetch({
      url: '/api/users/:id',
      method: 'GET'
    }, {
        params: {
          id: 112
        }
      }).then((result: any) => {
        console.log(result);
      });
  }
};
export default actions;
