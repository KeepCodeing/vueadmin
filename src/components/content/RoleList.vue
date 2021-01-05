<template>
  <div class="role_list_box">
    <Breadcrumb :title="['用户管理', '角色列表']"/>
    <el-card>
      <SearchBox :show_search="false" :show_add="true"/>
      <TableList :data_list="$store.state.role_list_store.role_list" :data_obj="data_obj">
        <template slot="extension">
          <el-table-column
            label="操作">
            <el-row :gutter="4">
              <el-tooltip effect="dark" content="编辑" placement="top-start" :enterable="false ">
                <el-col :span="8">
                  <el-button type="primary" size="small" class="el-icon-edit">编辑</el-button>
                </el-col>
              </el-tooltip>
              <el-tooltip effect="dark" content="设置" placement="top-start" :enterable="false ">
                <el-col :span="8">
                  <el-button type="warning" size="small" class="el-icon-setting">设置</el-button>
                </el-col>
              </el-tooltip>
              <el-tooltip effect="dark" content="删除" placement="top-start" :enterable="false ">
                <el-col :span="8">
                  <el-button type="danger" size="small" class="el-icon-delete">删除</el-button>
                </el-col>
              </el-tooltip>
            </el-row>
          </el-table-column>
        </template>
        <template slot="pre_extension">
        <!--     这里没必要将参数传过去什么的，table-column自带的渲染功能就行     -->
          <el-table-column type="expand" prop="children">
            <template slot-scope="scope">
              <el-row v-for="item in scope.row['children']" >
              <!--         第一列       -->
                <el-col :span="5">
                  <el-tag>
                    {{item.authName}}
                  </el-tag>
                  <i class="el-icon-caret-right" />
                </el-col>
              <!--         第二列，其中又分成了两列      -->
                <el-col :span="19">
                  <el-row v-for="c_item in item['children']">
                    <el-col :span="7"><el-tag closable type="success" >{{c_item.authName}}</el-tag></el-col>
                    <el-col :span="17"><el-tag closable v-for="c_c_item in c_item['children']" type="warning">{{c_c_item.authName}}</el-tag></el-col>
                  </el-row>
                </el-col>
              </el-row>
            </template>
          </el-table-column>
        </template>
      </TableList>
    </el-card>
  </div>
</template>

<script>
  import SearchBox from "./SearchBox";
  import TableList from "./TableList";
  import Breadcrumb from "./Breadcrumb";
  import {GET_ROLE_LIST} from "../../store/type";

  export default {
    name: "RoleLIst",
    components: {
      TableList,
      SearchBox,
      Breadcrumb,
    },
    data() {
      return {
        data_obj: [
          {prop: 'roleName', label: '角色名称'},
          {prop: 'roleDesc', label: '角色描述'},
        ]
      }
    },
    created() {
      this.$store.dispatch(GET_ROLE_LIST);
      SearchBox.props = ['show_search', 'show_add'];
      TableList.props = ['data_list', 'data_obj'];
      Breadcrumb.props = ['title'];
    }
  }
</script>

<style scoped>
  .role_list_box {
    padding: 5px;
    margin: 0 20px 0 20px;
  }
  .el-row {
    display: flex;
    align-items: center;
  }
  .el-tag {
    margin: 10px;
  }
</style>
