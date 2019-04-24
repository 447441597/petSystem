<template>
  <el-pagination
    layout="prev, pager, next"
    :page-size='pagiNation.eachpage'
    :total="pagiNation.total"
    @current-change="change1"
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
    ...mapActions(["setshops","getno"]),
    change1(i) {
        console.log(i,'d')
      this.getno({ page: i });
    }
  }
};
</script>

<style>
</style>