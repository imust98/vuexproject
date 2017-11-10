import { RouteConfig } from 'vue-router';
import Nav from '../components/Nav/index.vue';
import UserManageView from '../views/UserManage/index.vue';
import AppManageView from '../views/AppManage/index.vue';
import QueryManageView from '../views/QueryManage/index.vue';
import OperationManageView from '../views/OperationManage/index.vue';
import PermissionManageView from '../views/PermissionManage/index.vue';
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'userManage',
    meta: {
      title: '用户管理'
    },
    component: UserManageView
  },
  {
    path: '/userManage',
    name: 'userManage',
    meta: {
      title: '用户管理'
    },
    component: UserManageView
  },
  {
    path: '/appManage',
    name: 'appManage',
    meta: {
      title: 'APP管理'
    },
    component: AppManageView
  },
  {
    path: '/queryManage',
    name: 'queryManage',
    meta: {
      title: '查询管理'
    },
    component: QueryManageView
  },
  {
    path: '/operationManage',
    name: 'operationManage',
    meta: {
      title: '运维管理'
    },
    component: OperationManageView
  },
  {
    path: '/permissionManage',
    name: 'permissionManage',
    meta: {
      title: '权限管理'
    },
    component: PermissionManageView
  }
];

export default routes;
