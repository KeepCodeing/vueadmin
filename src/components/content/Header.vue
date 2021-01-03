<template>
  <div class="header_box">
    <img src="../../assets/images/logo.png" alt="logo" class="header_logo">
    <h1 class="header_title">Welcome to Vue admin system</h1>
    <div style="display: flex; align-items: center; margin-right: 10px;">
      <el-button type="danger" size="small" icon="el-icon-back" @click="logout">退出</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      logout() {
        this.$message({
          type: 'success',
          message: '退出成功!即将自动跳转!',
          showClose: true
        });
        window.sessionStorage.clear();
        setTimeout(() => window.location.reload(), 1000);
      }
    }
  }
</script>

<style scoped>
  .header_box {
    display: flex;
    justify-content: space-between;
  }
  .header_logo {
    height: 60px;
    width: 70px;
    margin-right: 20px;
  }
  .header_title {
    line-height: 60px;
    color: #f1c40f;
    font-family: Consolas, sans-serif;
  }
  .el-button {
    font-size: 13px;
    height: 40px;
  }
</style>
