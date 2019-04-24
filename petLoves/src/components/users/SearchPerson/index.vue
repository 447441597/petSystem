<template>
    <div style="width: 500px;">
  <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="手机号" value="phone"></el-option>
      <el-option label="权限号" value="privilege"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="serachpersons"></el-button>
  </el-input>
</div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("users");
export default {
  data() {
    return {
      select: "",
      input5: "",
    };
  },
  methods: {
    ...mapActions(["setPersons"]),
    serachpersons() {
        
    //   console.log(this.select);
    //   console.log(this.input5);
      let type = this.select;
      let value = this.input5
      console.log(typeof(value))
      this.setPersons({ type, value });
    }
  }
};
</script>

<style>
</style>
