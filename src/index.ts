import Vue from 'vue';
import App from './views/App.vue';
import { sync } from 'vuex-router-sync';
import router from './router';
import store from './store';
// tslint:disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
