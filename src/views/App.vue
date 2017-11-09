<template>
  <div class="g-doc">test
    <router-view></router-view>
    <i class="icon-packup"></i>    
  </div> 
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class App extends Vue {
  
}
</script>
<style lang="scss">
@import "../css/iconfont/iconfont.css";
.g-doc {
  width: 1200px;
  margin: 0 auto;
}
</style>
