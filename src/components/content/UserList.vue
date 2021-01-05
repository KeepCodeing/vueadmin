<template>
  <div class="user_list_box">
    <!--  面包屑部分  -->
    <TopBreadcrumb :title="['用户管理', '权限管理']"/>
    <!--  卡片容器  -->
    <el-card>
      <!--   表格上的搜索框和按钮以及对话框   -->
      <SearchBox :show_search="true" :show_add="true"/>
      <!--   表格主体，这里通过一个max-height属性给表格设置了滚动条.. -->
      <TableList :data_list="$store.state.user_list_store.user_list" :data_obj="data_obj">
        <template slot="extension">
          <el-table-column
            prop="state"
            label="用户状态">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.state"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
            <el-row :gutter="4">
              <el-tooltip effect="dark" content="编辑" placement="top-start" :enterable="false ">
                <el-col :span="8">
                  <el-button type="primary" size="small" class="el-icon-edit"/>
                </el-col>
              </el-tooltip>
              <el-tooltip effect="dark" content="设置" placement="top-start" :enterable="false ">
                <el-col :span="8">
                  <el-button type="warning" size="small" class="el-icon-setting"/>
                </el-col>
              </el-tooltip>
              <el-tooltip effect="dark" content="删除" placement="top-start" :enterable="false ">
                <el-col :span="8">
                  <el-button type="danger" size="small" class="el-icon-delete"/>
                </el-col>
              </el-tooltip>
            </el-row>
          </el-table-column>
        </template>
      </TableList>
    </el-card>
  </div>
</template>

<script>
  import {GET_USER_LIST} from "../../store/type";
  import TopBreadcrumb from "./Breadcrumb";
  import SearchBox from "./SearchBox";
  import TableList from "./TableList";

  export default {
    name: "UserList",
    components: {
      TopBreadcrumb,
      SearchBox,
      TableList,
    },
    data() {
      // 给表格传递数据，不好的地方就是用户需要了解数据来源，不过也没想到改进的方法
      return {
        data_obj: [
          {prop: 'name', label: '姓名'},
          {prop: 'city', label: '所在地'},
          {prop: 'role', label: '角色'},
          {prop: 'id', label: '用户ID'},
          ]
      }
    },
    created() {
      this.$store.dispatch(GET_USER_LIST);
      // 给组件传递参数
      SearchBox.props = ['show_search', 'show_add'];
      TopBreadcrumb.props = ['title'];
      TableList.props = ['data_list', 'data_obj'];
    }
  }
</script>

<style scoped>
  .user_list_box {
    padding: 5px;
    margin: 0 20px 0 20px;
  }
</style>
