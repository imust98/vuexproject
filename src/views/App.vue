<template>
  <div class="g-doc">
    <header class="g-head">
      <div class="title"><strong>APM管理后台</strong></div>
      <div class="userInfo"><strong>caiya</strong></div>
    </header>
    <div class="g-body">
      <div class="g-side">
        <ul class="side">
          <li>
            <router-link class="tab" to="/userManage" :class="{'tab-active':activeTab === 'userManage'}">
              <span>用户管理</span>
            </router-link>
          </li>
          <li>
            <router-link class="tab" to="/appManage" :class="{'tab-active':activeTab === 'appManage'}">
              <span>APP管理</span>
            </router-link>
          </li>
          <li>
            <router-link class="tab" to="/queryManage" :class="{'tab-active':activeTab === 'queryManage'}">
              <span>查询管理</span>
            </router-link>
          </li>
          <li>
            <router-link class="tab" to="/operationManage" :class="{'tab-active':activeTab === 'operationManage'}">
              <span>运维管理</span>
            </router-link>
          </li>
          <li>
            <router-link class="tab" to="/permissionManage" :class="{'tab-active':activeTab === 'permissionManage'}">
              <span>权限管理</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="g-main">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class App extends Vue {
  private activeTab: string;
  private created() {
    this.onRouterChange();
  }

  @Watch("$route")
  private onRouterChange() {
    const path: string = this.$route.path || "";
    let activeTab: string;
    activeTab = path.slice(1);
    this.activeTab = activeTab || 'userManage';
  }
}
</script>
<style lang="scss">
@import "../css/common.scss";
</style>
