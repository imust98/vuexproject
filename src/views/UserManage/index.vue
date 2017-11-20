<template>
  <div class="m-main m-user">
    <h1>用户管理页面</h1>
    <apm-table :sourcelist="tableData">
        <template slot="header">
          <tr>
            <td class="column_100">用户名</td>
            <td class="column_200">邮箱</td>
            <td>操作</td>
          </tr>
        </template>
        <template scope="props" slot="body">
            <td class="column_100">{{props.item.id}}</td>
            <td class="column_200">{{props.item.name}}</td>
            <td>
              <a @click="handEdit(props.$index,props.item)">修改</a>
              <a @click="handDelete(props.$index,props.item)">删除</a> 
            </td>  
        </template>
    </apm-table>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import ApmTable from '../../components/Table/index.vue';

  interface UserModule {
    id:number,
    name:string
  }

  @Component({
    components: {
      ApmTable
    }
  })
  export default class UserCenterContainer extends Vue {
    private tableData:UserModule[] = [{id:2,name:"lilei"},{id:3,name:"jkjkj"}];
    private handEdit(index:number,item:any):void{
      console.log('edit');
      debugger;
    }
    private handDelete(index:number,item:any):void{
      console.log('delete');
    }
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
    .column_100{
      width: 100px;
    }
    .column_200{
      width: 200px;
    }
  }
</style>

