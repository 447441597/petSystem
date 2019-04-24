<template>
      <el-pagination
    background
    layout="prev, pager, next,sizes"
    :total="pagination.total"
    :page-size="pagination.eachpage"
    :page-sizes="[5,10,15,20]"
    :current-page="pagination.curpage"
    @current-change="click"
    @prev-click="prev"
    @next-click="next"
    @size-change="handleSizeChange"
    
  ></el-pagination>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("services");
export default {
    props: [""],
  computed: {
    ...mapState(["pagination"])
  },
  data() {
    return {
      pageArr: [5, 10, 15, 20],
      rows:""
    };
  },
  methods: {
    ...mapActions(["getServices","setPagesize"]),
    click(item) {
      console.log(item);
      this.getServices({ page: item});
    },
    prev() {
    //   console.log(12);
    //   console.log(this.pagination);
      if (this.pagination.curpage > 1) {
        this.$emit("show", this.pagination.curpage - 1);
      }
    },
    next() {
      if (this.pagination.curpage <= this.pagination.maxpage) {
        this.$emit("show", parseInt(this.pagination.curpage) + 1);
      }
    },
    handleSizeChange(val) {
      console.log(val);
      this.setPagesize(val);
      this.getServices();
      
    }
  }
}
</script>

<style>

</style>
