
<template>
      <el-table
       :data="persons"
       style="width: 80%">
      <el-table-column
        prop="name"
        label="用户名"
        width="180">
        
       </el-table-column>
       <el-table-column
         prop="pwd"
         label="密码"
         width="180">
        </el-table-column>
        <el-table-column
         prop="type"
         label="账号类别">
        </el-table-column>
         <el-table-column
         label="操作">
          <template slot-scope="scope">
              <el-button type="primary" @click="update(scope.$index, scope.row)">修改</el-button>
               <el-button type="danger" @click="del(scope.$index, scope.row)">删除</el-button>
         </template>
        </el-table-column>
       </el-table>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("users");
export default {
  created() {
    this.setPersons();
  },
  computed: {
    ...mapState(["persons"])
  },

  methods: {
    ...mapActions(["setPersons"])
  }
};
</script>

<style>
</style>

