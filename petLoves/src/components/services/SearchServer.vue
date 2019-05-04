<template>
  <div style="margin: 15px 0;">
    <el-input placeholder="请输入内容" v-model="value" class="input-with-select">
      <el-select v-model="selectType" slot="prepend" placeholder="请选择">
        <el-option label="服务名" value="serviceName"></el-option>
        <el-option label="品类" value="serverType"></el-option>
        <el-option label="时间" value="serverDate"></el-option>
        <el-option label="适用规格" value="applyGuige"></el-option>
        <el-option label="服务规格" value="serverGuige"></el-option>
        <el-option label="员工等级" value="level"></el-option>
        <el-option label="价格" value="price"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="searchServer"></el-button>
    </el-input>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('services')
export default {
  data() {
    return {
      selectType: "serviceName",
      value: ""
    };
  },
  computed: {},
  methods: {
    ...mapActions(["getServices", "setSearch"]),
    searchServer() {
      console.log(this.selectType, this.value);
      this.setSearch({ type: this.selectType, value: this.value });
      this.getServices();
    }
  }
};
</script>

<style>
</style>
