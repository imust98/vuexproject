import { ADD_USER, USER_LIST_LOAD, USER_ITEM_DELETE } from './mutation-types';
export default {
  [ADD_USER](state: any, user: any) {
    state.users.push(user);
  },
  [USER_LIST_LOAD](state: any, payload: any) {
    state.users = payload.list;
  },
  [USER_ITEM_DELETE](state: any, payload: any) {
    const index: number = state.users.findIndex((item: any) => item.id === '91320');
    state.users.splice(index, 1);
  }
};
