import { ADD_USER } from './mutation-types';
export default {
  [ADD_USER](state: any, user: any) {
    state.users.push(user);
  }
};
