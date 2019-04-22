<template>
    <div>
       <el-table
    :data="shops"
    style="width: 100%">
    <el-table-column
      label="姓名"
      prop="name"
      width="120">
    </el-table-column>
    <el-table-column
      label="营业执照号码"
      prop="businessNum"
      width="120">
    </el-table-column>
      <el-table-column
      label="营业执照"
      prop="businessImage"
      width="120">
    </el-table-column>
     <el-table-column
      label="法人"
      prop="legalPerson"
      width="120">
    </el-table-column>
     <el-table-column
      label="电话"
      prop="tel"
      width="120">
    </el-table-column>
     <el-table-column
      label="头图"
      prop="headImage"
      width="120">
    </el-table-column>
     <el-table-column
      label="特色"
      prop="feature"
      width="120">
    </el-table-column>
    <el-table-column
      label="VIP等级"
      prop="vipLeval"
      width="120">
    </el-table-column>
    <el-table-column
      label="佣金比例"
      prop="rate"
      width="120">
    </el-table-column>
    <el-table-column
      label="职员姓名"
      prop="assistantname"
      width="120">
    </el-table-column>
    <el-table-column
      label="职员职级"
      prop="assistantlevel"
      width="120">
    </el-table-column>
    <el-table-column
      label="职员电话"
      prop="assistantphone"
      width="120">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleDelete(scope.$index, scope.row)" type="danger" icon="el-icon-delete" circle></el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import axios from "axios";
const { mapActions } = createNamespacedHelpers("lwj");
export default {
  data() {
    return {};
  },
  created() {
    this.getInfo();
  },
  methods: {
    ...mapActions(["getInfo"])
  }
};
</script>

<style>
</style>
