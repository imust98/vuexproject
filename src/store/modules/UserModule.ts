import Vue from 'vue';
import { MutationTree, ActionTree, ActionContext, Module, GetterTree } from 'vuex';
import fetch from '../fetch';

/**
 * Interfaces
 */
interface IUserState {
  users: null;
}

/**
 * State
 */
const states: IUserState = {
  users: null
};

/**
 * Getters
 */
const getters: GetterTree<IUserState, any> = {

};

/**
 * Actions
 */
const actions: ActionTree<IUserState, any> = {
  getList({ commit }: { commit: any }, payload: any) {
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
  deleteItem({ commit }: { commit: any }, payload: any) {
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

/**
 * Mutations
 */
const GET_USER_LIST = 'GET_USER_LIST';
const ADD_USER = 'ADD_USER';
const USER_LIST_LOAD = 'USER_LIST_LOAD';
const USER_ITEM_DELETE = 'USER_ITEM_DELETE';

const mutations: MutationTree<IUserState> = {
  [ADD_USER](state: any, payload: any) {
    state.users.push(payload);
  },
  [USER_LIST_LOAD](state: any, payload: any) {
    state.users = payload.list;
  },
  [USER_ITEM_DELETE](state: any, payload: any) {
    const index: number = state.users.findIndex((item: any) => item.id === '91320');
    state.users.splice(index, 1);
  }
};


const Module: Module<IUserState, any> = {
  namespaced: true,
  state: states,
  mutations,
  actions
};

export default Module;

