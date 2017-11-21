import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';


Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations,
  actions
});
export default store;
