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
      prop="goods.price"
      label="价格">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态">
    </el-table-column>
    <el-table-column
      prop="goods.name"
      label="订单信息">
    </el-table-column>
  </el-table>
  <div class="block">
  <el-pagination
    layout="prev, pager, next"
    :total="~~(pagination.total)" @current-change="pageChange">
  </el-pagination>
</div>
</template>

    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("ordrers");
export default {
  computed: {
    ...mapState(["orders","pagination"])
  },
  methods: {
    pageChange(i){
      console.log(i)
    }
  }
};
</script>

<style>
</style>