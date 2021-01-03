<template>
  <div>
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      router
      :default-active="$route.path">
      <el-submenu :index="item.id + ''" v-for="item in $store.state.menu_store.data">
        <span slot="title"><i class="el-icon-menu" />{{item.title}}</span>
        <el-menu-item :key="sub_item.id" :index="item.url + sub_item.url" v-for="sub_item in item.sub_menu"><i class="el-icon-s-grid"/>{{sub_item.title}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import {GET_MENU_LIST} from "../../store/type";

  export default {
    name: "Menu",
    created() {
      this.$store.dispatch(GET_MENU_LIST);
    }
  }
</script>

<style scoped>
  .el-menu {
    border: none;
  }
</style>
