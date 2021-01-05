<template>
  <div class="input_box">
    <el-row :gutter="20">
      <el-col v-if="show_search" :span="20">
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"/>
        </el-input>
      </el-col>
      <el-col v-if="show_add" :span="4">
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
</template>

<script>
  export default {
    name: "SearchBox",
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
          // 重置似乎是直接将绑定数据重置了，因此添加的数据也会被重置...
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
  }
</script>

<style scoped>
  .input_box {
    width: 400px;
    margin-bottom: 20px;
  }
</style>
