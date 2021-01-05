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
      <!--   表格上的搜索框和按钮以及对话框   -->
      <div class="input_box">
        <el-row :gutter="20">
          <el-col :span="20">
            <el-input placeholder="请输入内容" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"/>
            </el-input>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="showDialog = true">添加用户</el-button>
            <!--      添加用户对话框      -->
            <el-dialog
              title="提示"
              :visible.sync="showDialog"
              width="30%">
              <div>
                <el-form label-width="80px" :model="form_data" :rules="rules" ref="userForm">
                  <el-form-item label="姓名" prop="name"><el-input v-model="form_data.name" /></el-form-item>
                  <el-form-item label="所在地" prop="city"><el-input v-model="form_data.city" /></el-form-item>
                  <el-form-item label="用户角色" prop="role"><el-input v-model="form_data.role" /></el-form-item>
                  <el-form-item label="用户ID" prop="uid"><el-input v-model="form_data.uid" /></el-form-item>
                </el-form>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="clearData('userForm')">取 消</el-button>
                <el-button type="primary" @click="submitData('userForm')">确 定</el-button>
              </span>
            </el-dialog>
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
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="city"
          label="所在地">
        </el-table-column>
        <el-table-column
          prop="role"
          label="用户角色">
        </el-table-column>
        <el-table-column
          prop="id"
          label="用户id">
        </el-table-column>
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
      </el-table>
    </el-card>
  </div>
</template>

<script>
  import {GET_USER_LIST} from "../../store/type";

  export default {
    name: "UserList",
    methods: {
      submitData(form_name) {
        this.$refs[form_name].validate(valid => {
          if (!valid) {
            this.$message({
              type: 'error',
              message: '请输入合法数据！',
              showClose: true,
            });
            return;
          }
          this.$store.state.user_list_store.user_list.push(this.form_data);
          this.showDialog = false;
          this.$refs[form_name].resetFields();
        });
      },
      clearData(form_name) {
        this.$refs[form_name].resetFields();
        this.showDialog = false;
      }
    },
    data() {
      return {
        showDialog: false,
        form_data: {
          name: '',
          city: '',
          role: '',
          uid: '',
          state: false,
        },
        rules: {
          name: [{require: true, min: 2, message: '字符串长度至少2位!'}],
          city: [{require: true, min: 2, message: '字符串长度至少2位!'}],
          role: [{require: true, min: 2, message: '字符串长度至少2位!'}],
          uid: [{require: true, min: 2, message: '字符串长度至少2位!'}],
        }
      }
    },
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
