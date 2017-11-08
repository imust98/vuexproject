
<template>
  <nav>
    <div>模块一</div>
    <div>模块一</div>
    <div>模块一</div>    
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Nav extends Vue {
 @Prop({
    default: false
  })
  private visible: boolean;
}
</script>

<style lang="scss">
nav {
  display: flex;
  height: 60px;
}
</style>


