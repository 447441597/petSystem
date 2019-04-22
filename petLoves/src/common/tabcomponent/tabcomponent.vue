<template>
    <div>
      <div>{{ordersType}}</div>
  <!-- <template>
  <el-table
    :data="orders"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="客户"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="门店"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="价格">
    </el-table-column>
    <el-table-column
      prop="address"
      label="状态">
    </el-table-column>
    <el-table-column
      prop="address"
      label="订单信息">
    </el-table-column>
  </el-table>
</template> -->

    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("orders");
export default {
  props:['ordersType'],
  computed: {
    ...mapState(["orders"])
  },
  methods: {},
};
</script>

<style>
</style>