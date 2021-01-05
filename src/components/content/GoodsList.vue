<template>
  <div class="goods_list_box">
    <Breadcrumb :title="['商品管理', '商品列表']"/>
    <el-card>
      <SearchBox :show_search="true" :show_add="false" />
      <TableList :data_list="$store.state.goods_list_store.goods_list" :data_obj="data_obj">
        <template slot="extension">
          <el-table-column
            label="操作">
            <el-row :gutter="4">
              <el-tooltip effect="dark" content="编辑" placement="top-start" :enterable="false ">
                <el-col :span="8">
                  <el-button type="primary" size="small" class="el-icon-edit"/>
                </el-col>
              </el-tooltip>
              <el-tooltip effect="dark" content="删除" placement="top-start" :enterable="false ">
                <el-col :span="8">
                  <el-button type="danger" size="small" class="el-icon-delete"/>
                </el-col>
              </el-tooltip>
            </el-row>
          </el-table-column>
        </template>
      </TableList>
    </el-card>
  </div>
</template>

<script>
  import Breadcrumb from "./Breadcrumb";
  import TableList from "./TableList";
  import SearchBox from "./SearchBox";
  import {GET_GOODS_LIST} from "../../store/type";

  export default {
    name: "GoodsList",
    components: {
      Breadcrumb,
      TableList,
      SearchBox,
    },
    data() {
      return {
        data_obj: [
          {prop: 'name', label: '商品名称'},
          {prop: 'price', label: '商品价格'},
          {prop: 'weight', label: '商品重量'},
          {prop: 'date', label: '创建日期'},
        ]
      }
    },
    created() {
      Breadcrumb.props = ['title'];
      TableList.props = ['data_list', 'data_obj'];
      SearchBox.props = ['show_search', 'show_add'];
      this.$store.dispatch(GET_GOODS_LIST);
    }
  }
</script>

<style scoped>
  .goods_list_box {
    padding: 5px;
    margin: 0 20px 0 20px;
  }
</style>
