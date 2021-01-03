<template>
  <div class="user_list_box">
  <!--  面包屑部分  -->
    <div class="breadcrumb_box">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  <!--  卡片容器  -->
    <el-card>
    <!--   表格上的搜索框和按钮   -->
      <div class="input_box">
        <el-row :gutter="20">
          <el-col :span="20">
            <el-input placeholder="请输入内容" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" />
            </el-input>
          </el-col>
          <el-col :span="4">
            <el-button type="primary">添加用户</el-button>
          </el-col>
        </el-row>


      </div>
    <!--   表格主体，这里通过一个max-height属性给表格设置了滚动条.. -->
      <el-table
        :data="$store.state.user_list_store.user_list"
        stripe
        border
        style="width: 100%"
        max-height="450">
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="city"
          label="所在地"
          width="180">
        </el-table-column>
        <el-table-column
          prop="id"
          label="用户id">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  import {GET_USER_LIST} from "../../store/type";

  export default {
    name: "UserList",
    created() {
      this.$store.dispatch(GET_USER_LIST);
    }
  }
</script>

<style scoped>
  .user_list_box {
    padding: 5px;
    margin: 0 20px 0 20px;
  }
  .breadcrumb_box {
    padding: 10px;
    margin: 3px;
  }
  .input_box {
    width: 400px;
    margin-bottom: 20px;
  }
</style>
