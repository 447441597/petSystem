<template>
<div style="width:400px">
  <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="宠主姓名" value="truename"></el-option>
      <el-option label="昵称" value="nickname"></el-option>
      <el-option label="地址" value="address"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
  </el-input>
</div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("petowns");
export default {
  data() {
    return {
      input3: "",
      select: ""
    };
  },
  methods: {
    ...mapActions(["setPet"]),
    search() {
      if (this.select == "") {
        this.$message('请选择查询类型');
      } else {
        if (this.input3 == "") {
            this.$message('请输入内容');
        } else {
          let payload = {
            type: this.select,
            value: this.input3
          };
          this.setPet(payload);
        }
      }
    }
  }
};
</script>

<style>
.el-select .el-input {
  width: 120px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
