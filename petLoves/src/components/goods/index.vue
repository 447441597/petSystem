<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true">添加商品</el-button>
    <el-button type="primary">修改商品</el-button>
    <el-button type="primary">删除商品</el-button>
    <Add></Add>
  </div>
</template>

<script>
import Add from './add'
export default {
  components: {
    Add
  },
  data() {
    return {
    };
  },
  methods: {
   
  }
};
</script>

<style>
</style>
