import { GET_USER_LIST } from './mutation-types';
import fetch from './fetch';
const actions = {
  GET_USER_LIST({ commit }: { commit: any }, payload: any) {
    fetch({
      url: '/api/users/:id',
      method: 'GET'
    }, {
        params: {
          id: payload.id
        }
      }).then((result: any) => {
        commit('USER_LIST_LOAD', {
          list: result
        });
      });
  },
  DELETE_USER_ITEM({ commit }: { commit: any }, payload: any) {
    fetch({
      url: '/api/user/:id',
      method: 'DELETE'
    }, {
        params: {
          id: payload.id
        }
      }).then((result: any) => {
        commit('USER_ITEM_DELETE', {
          id: result
        });
      });
  }
};
export default actions;
