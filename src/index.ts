import Vue from 'vue';
import App from './views/App.vue';
import { sync } from 'vuex-router-sync';
import router from './router';
import store from './store';
const obj = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
