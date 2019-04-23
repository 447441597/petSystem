<template>
    <div>
  <template>
  <el-table
    :data="orders"
    height="250"
    border
    
    style="width: 100%">
    <el-table-column
      prop="petOwns.nickname"
      label="客户"
      width="180">
    </el-table-column>
    <el-table-column
      prop="shops.name"
      label="门店"
      width="180">
    </el-table-column>
    <el-table-column
      prop="services.price"
      label="价格">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态">
    </el-table-column>
    <el-table-column
      prop="services.name"
      label="订单信息">
    </el-table-column>
  </el-table>
  <div class="block">
  <el-pagination
    layout="prev, pager, next"
    :total="pagination.total" @size-change="pageChange(pagination.eachpage)">
  </el-pagination>
</div>
</template>

    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("orders");
export default {
  created() {
    this.getOrders(0);
  },
  computed: {
    ...mapState(["orders",'pagination'])
  },
  methods: {
    ...mapActions(["getOrders"])
  }
};
</script>

<style>
</style>