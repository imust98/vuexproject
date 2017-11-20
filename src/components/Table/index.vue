/**
 * Component Table
 * hzlihaoliang 
 * date 2017-11-16
 */
<template>
  <div class="m-table" :class="klass">
    <div class="table-header">
      <table>
        <slot name="header"></slot>
      </table>
    </div>
    <div v-if="sourcelist && sourcelist.length" class="table-body">
      <table>
        <tr v-for="(item, index) in sourcelist">
          <slot name="body" v-bind:item="item"   v-bind:$index="index"></slot>
        </tr>
      </table>
    </div>
    <div v-else class="table-empty">
        <slot name="empty">{{emptyText}}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class Table extends Vue {
  @Prop()
  private klass: string;
  @Prop()
  private sourcelist: any;
  @Prop({
    default: '没有数据'
  })
  private emptyText:string;
}
</script>

<style lang="scss">
.m-table {
  position: relative;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  max-width: 100%;
  overflow: hidden;  
  font-size: 14px;   
  color: #5a5e66;               
  background-color: #fff;
  table{
    width: 100%;
  }
  thead {
    color: #878d99;
    font-weight: 500;
  }

  th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
  }

  th,td {
    position: relative;      
    padding: 12px 0;
    min-width: 0;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    border-bottom: 1px solid #e6ebf5;
  }
  .table-empty{
    padding: 15px 0;
    text-align: center;
  }
}
</style>
