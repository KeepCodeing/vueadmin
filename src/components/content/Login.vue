<template>
  <div class="form_box">
    <div class="form_container">
      <el-form status-icon label-width="70px" :model="form_data" :rules="rules" ref="loginForm">
        <el-form-item label="账号" prop="account">
          <el-input v-model="form_data.account" />
        </el-form-item>
        <el-form-item label="密码" prop="password" >
          <el-input type="password" v-model="form_data.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="form_submit('loginForm')">提交</el-button>
          <el-button @click="form_reset('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    methods: {
      // 表单提交事件
      form_submit(form_name) {
        this.$refs[form_name].validate((valid) => {
          if (valid) {
            // 添加token和显示登录成功提示
            window.sessionStorage.setItem('token', 'login success');
            this.$message({
              showClose: true,
              message: '登录成功!即将自动跳转!',
              type: 'success'
            });
            setTimeout(() => this.$router.push('/home'), 1000);
          }
        });
      },
      // 表单重置事件，这个重置是把表单值变成默认值
      form_reset(form_name) {
        this.$refs[form_name].resetFields();
      },
    },
    // 存放表单数据，字段规则
    data() {
      return {
        form_data: {
          account: "",
          password: "",
        },
        rules: {
          account: [
            { required: true, message: '请输入账号!', trigger: 'blur' },
            { min: 5, max: 15, message: '长度在 5 到 15 个字符!', trigger: 'blur' }
          ],
          password: [
            {required: true, message: '请输入密码!', trigger: 'blur'},
            {min: 3, max: 15, message: '长度在 3 到 15 个字符!', trigger: 'blur'}
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .form_box {
    height: 100%;
    width: 100%;
    background: url("../../assets/images/bg-image.png") no-repeat;
    background-size: cover;
  }
  .form_container {
    height: 350px;
    width: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .el-form {
    margin-right: 10px;
  }
</style>
