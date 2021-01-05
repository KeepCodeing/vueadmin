<template>
  <div class="order_list_box">
    <Breadcrumb :title="['订单管理', '订单列表']" />
    <el-card>
      <SearchBox :show_search="true" :show_add="false" />
      <TableList :data_list="$store.state.order_list_store.order_list" :data_obj="data_obj">
        <template slot="extension">
          <el-table-column prop="pay" label="是否付款">
            <template slot-scope="scope">
              <el-tag :type="scope.row['pay'] === '是' ? 'success' : 'danger'">{{scope.row['pay']}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="send" label="是否发货">
            <template slot-scope="scope">
              <el-tag :type="scope.row['send'] === '是' ? 'success' : 'danger'">{{scope.row['send']}}</el-tag>
            </template>
          </el-table-column>
        </template>
      </TableList>
    </el-card>
  </div>
</template>

<script>
  import Breadcrumb from "./Breadcrumb";
  import SearchBox from "./SearchBox";
  import TableList from "./TableList";
  import {GET_ORDER_LIST} from "../../store/type";
  export default {
    name: "OrderList",
    components: {
      Breadcrumb,
      SearchBox,
      TableList,
    },
    data() {
      return {
        data_obj: [
          {prop: 'id', label: '订单编号'},
          {prop: 'price', label: '订单价格'},
          // {prop: 'pay', label: '是否付款'},
          // {prop: 'send', label: '是否发货'},
          {prop: 'date', label: '订单日期'},
        ]
      }
    },
    created() {
      this.$store.dispatch(GET_ORDER_LIST);
      Breadcrumb.props = ['title'];
      SearchBox.props = ['show_search', 'show_add'];
      TableList.props = ['data_list', 'data_obj'];
    }
  }
</script>

<style scoped>
  .order_list_box {
    padding: 5px;
    margin: 0 20px 0 20px;
  }
</style>
