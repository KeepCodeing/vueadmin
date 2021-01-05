<template>
  <div class="breadcrumb_box">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in title">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: "Breadcrumb",
  }
</script>

<style scoped>
  .breadcrumb_box {
    padding: 10px;
    margin: 3px;
  }
</style>
