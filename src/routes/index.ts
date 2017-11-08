import { RouteConfig } from 'vue-router';
import Nav from '../components/Nav/index.vue';
const routes: RouteConfig[] = [
  {
    path: '/index',
    name: 'index',
    meta: {
      title: 'apm'
    },
    component: Nav
  }
];

export default routes;
