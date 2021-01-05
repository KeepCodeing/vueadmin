<template>
  <div class="power_list_box">
    <Breadcrumb :title="['权限管理', '权限列表']"/>
    <el-card>
      <TableList :data_list="$store.state.power_list_store.power_list" :data_obj="data_obj">
        <el-table-column
          slot="extension"
          prop="level"
          label="权限等级">
          <template slot-scope="scope">
            <el-tag :type="getTagLevel(scope.row.level)">{{scope.row.level}}</el-tag>
          </template>
        </el-table-column>
      </TableList>
    </el-card>
  </div>
</template>

<script>
  import TableList from "./TableList";
  import Breadcrumb from "./Breadcrumb";
  import {GET_POWER_LIST} from "../../store/type";

  export default {
    name: "PowerList",
    components: {
      TableList,
      Breadcrumb
    },
    methods: {
      getTagLevel(level) {
        if (level === '一级') return '';
        if (level === '二级') return 'success';
        if (level === '三级') return 'warning';
        if (level === '四级') return 'danger';
      },
    },
    data() {
      return {
        data_obj: [
          {prop: 'name', label: '权限名'},
          {prop: 'path', label: '路径名'},
        ]
      }
    },
    created() {
      this.$store.dispatch(GET_POWER_LIST);
      Breadcrumb.props = ['title'];
      TableList.props = ['data_list', 'data_obj'];
    }
  }
</script>

<style scoped>
  .power_list_box {
    padding: 5px;
    margin: 0 20px 0 20px;
  }
</style>
