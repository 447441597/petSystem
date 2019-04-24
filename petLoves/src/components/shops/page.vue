<template>
  <el-pagination
    layout="prev, pager, next"
    :page-size='pagiNation.eachpage'
    :total="pagiNation.total"
    @current-change="change"
    :current-page="pagiNation.curpage">
  </el-pagination>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("lwj");
export default {
  computed: {
    ...mapState(["pagiNation"])
  },
  methods: {
    ...mapActions(["setshops","getok"]),
   
    change(i) {
      this.getok({ page: i });
    }
  }
};
</script>

<style>
</style>