import Vue from 'vue';
import App from './views/App.vue';
import { sync } from 'vuex-router-sync';
import router from './router';
// tslint:disable-next-line
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
