<template>
  <el-container>
    <el-header>
<!--   头部布局   -->
      <Header />
    </el-header>
    <el-container>
<!--   侧边栏菜单布局   -->
      <el-aside width="200px">
        <Menu />
      </el-aside>
<!--   数据展示区布局   -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Menu from './Menu'
  import Header from './Header'
  export default {
    name: "Home",
    components: {
      Menu,
      Header
    }
  }
</script>

<style scoped>
  .el-container {
    height: 100%;
    background: antiquewhite;
  }
  .el-header {
    padding: 0;
    background: #34495e;
  }
  .el-aside {
    height: 100%;
    background: rgb(84, 92, 100);
  }
  .el-main {
    padding: 30px 0 0 30px;
  }

</style>
