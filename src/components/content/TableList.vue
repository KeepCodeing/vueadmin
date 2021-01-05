<template>
  <el-table
    :data="data_list"
    stripe
    border
    style="width: 100%"
    max-height="450">
    <!--  这里放了两个插槽，用来对应不同扩展  -->
    <slot name="pre_extension">
      <div></div>
    </slot>
    <el-table-column type="index" label="#" />
    <el-table-column
      v-for="item in data_obj"
      :prop="item.prop"
      :label="item.label">
    </el-table-column>
    <slot name="extension">
      <div></div>
    </slot>
  </el-table>
</template>

<script>
  export default {
    name: "TableLIst"
  }
</script>

<style scoped>

</style>
