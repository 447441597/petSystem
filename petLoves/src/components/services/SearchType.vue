<template>
  <div style="margin: 15px 0;">
    <el-input placeholder="请输入内容" v-model="value" class="input-with-select">
      <el-select v-model="selectType" slot="prepend" placeholder="请选择">
        <el-option label="品类" value="typeName"></el-option>
        <el-option label="价格" value="typePrice"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="searchServer"></el-button>
    </el-input>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('serverType')
export default {
  data() {
    return {
      selectType: "typeName",
      value: ""
    };
  },
  computed: {},
  methods: {
    ...mapActions(["getTypes", "setSearch"]),
    searchServer() {
      console.log(this.selectType, this.value);
      this.setSearch({ type: this.selectType, value: this.value });
      this.getTypes();
    }
  }
};
</script>

<style>
</style>
