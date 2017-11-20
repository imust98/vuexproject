<template>
  <div class="m-main m-user">
    <h1>用户管理页面</h1>
    <apm-table :sourcelist="tableData" klass="m-table-user">
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
  .m-table-user{
    .column_100{
      width: 100px;
    }
    .column_200{
      width: 200px;
    }
  }
</style>

