import { ADD_USER, USER_LIST_LOAD } from './mutation-types';
export default {
  [ADD_USER](state: any, user: any) {
    state.users.push(user);
  },
  [USER_LIST_LOAD](state: any, payload: any) {
    state.users = payload.list;
  }
};
