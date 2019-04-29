<template>
  <div class="block" style="margin:40px 0">
    <span class="demonstration">选择日期</span>
    <el-date-picker
      v-model="productionDate"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
    ></el-date-picker>
    <el-button type="primary" @click="setDate">确定</el-button>
  </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("services");
export default {
  data() {
    return {
    productionDate:""
    };
  },
  computed: {
    ...mapState(["productionDate"]),
    productionDate: {
  
    }
  },
  methods: {
      ...mapActions(["setproductionDate"]),
      setDate(){
          this.setproductionDate(this.productionDate);
          console.log(this.productionDate,"setDate")
      }
  }
};
</script>

<style>
.demonstration {
  margin: 20px 60px;
}
</style>
