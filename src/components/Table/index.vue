/**
 * Component Table
 * hzlihaoliang 
 * date 2017-11-16
 */
<template>
  <div class="m-table">
    <div class="m-table-header">
      <table>
        <slot name="header"></slot>
      </table>
    </div>
    <div class="m-table-body">
    <table>
      <tr v-for="(item, index) in sourcelist">
        <slot name="body" v-bind:item="item"   v-bind:$index="index"></slot>
      </tr>
    </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class Table extends Vue {

  @Prop()
  private sourcelist:any;
}
</script>

<style lang="scss">

</style>
