<template>
  <div class="block">
    <span class="demonstration">日期</span>
    <el-date-picker
      v-model="serverDate"
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
    serverDate:""
    };
  },
  computed: {
    ...mapState(["serverDate"]),
    serverDate: {
  
    }
  },
  methods: {
      ...mapActions(["setServerDate"]),
      setDate(){
          this.setServerDate(this.serverDate);
          console.log(this.serverDate,"setDate")
      }
  }
};
</script>

<style>
.demonstration {
  margin: 20px 20px;
}
</style>
