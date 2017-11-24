<template>
  <div class="m-main m-user">
    <h1>用户管理页面</h1>
    <apm-table :sourcelist="userlist" klass="m-table-user">
        <template slot="header">
          <tr>
            <td class="column_100">用户名</td>
            <td class="column_200">用户类别</td>
            <td>操作</td>
          </tr>
        </template>
        <template scope="props" slot="body">
            <td class="column_100">{{props.item.name}}</td>
            <td class="column_200">{{props.item.userTag}}</td>
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
  import {Component , Watch} from 'vue-property-decorator';
  import ApmTable from '../../components/Table/index.vue';

  interface UserModule {
    id: number,
    name: string,
    userTag: number
  }

  @Component({
    components: {
      ApmTable
    }
  })
  export default class UserCenterContainer extends Vue {
    private handEdit(index: number , item: any): void {
    }
    private handDelete(index: number , item: any): void {
      this.$store.dispatch('user/deleteItem',{id: item.id});
    }
    private created() {
      this.$store.dispatch('user/getList',{
        id:113
      });
    }
    // 获取用户列表
    private get userlist(): UserModule[] {
      return this.$store.state.user.users;
    }
  }
</script>
<style lang="scss">
  .m-table-user {
    .column_100 {
      width: 100px;
    }
    .column_200 {
      width: 200px;
    }
  }
</style>

