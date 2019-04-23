<template>
  <el-table
    :data="pet"
    border
    style="width: 100%">
    <el-table-column
      fixed
      label="头像"
      width="150">
      <template slot-scope="scope">
         <img :src="src+scope.row.headImage" width="40" height="40" class="head_pic"/>
      </template>
    </el-table-column>
    <el-table-column
      prop="nickname"
      label="昵称"
      width="100">
    </el-table-column>
    <el-table-column
      prop="truename"
      label="真实姓名"
      width="100">
    </el-table-column>
    <el-table-column
      label="会员卡"
      prop="truename"
      width="100">
      <el-button type="primary" size="small" >查看</el-button>
    </el-table-column>
    <el-table-column
      prop="phone"
      label="电话"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="送货地址"
      width="200">
    </el-table-column>
     <el-table-column
      prop="area"
      label="区域"
      width="100">
    </el-table-column>
     <el-table-column
      prop="truename"
      label="状态"
      width="100">
      <template slot-scope="scope">
        <el-button type="primary" size="small" >查看</el-button>
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="拥有的宠物"
      width="100">
      <template slot-scope="scope">
        <el-button type="primary" size="small" @click="look(scope.$index, scope.row)" >查看</el-button>
      </template>
    </el-table-column>
   
  </el-table>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "petowns"
);
export default {
  data() {
    return {
      src: "http://192.168.195.2:3005/images/"
    };
  },
  computed: {
    ...mapState(["pet"])
  },
  methods: {
    ...mapMutations(["setIdent"]),
    look(index,row) {
      this.setIdent();
    }
  }
};
</script>