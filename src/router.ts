import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router: VueRouter = new VueRouter({
  mode: 'history',
  routes
});

const originalTitle: string = 'APM后端管理平台';

// update document title
router.afterEach((route: Route) => {
  document.title = route.meta.title
    ? `${route.meta.title} - ${originalTitle}`
    : originalTitle;
});

export default router;
