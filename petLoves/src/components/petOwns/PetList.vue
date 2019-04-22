<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      label="头像"
      width="150">
      <template slot-scope="scope">
        <el-button type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
    <el-table-column
      prop="nickname"
      label="昵称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="truename"
      label="真实姓名"
      width="120">
    </el-table-column>
    <el-table-column
      label="会员卡"
      width="120">
      <template slot-scope="scope">
        <el-button type="text" size="small">查看</el-button>
      </template>
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
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="拥有的宠物"
      width="100">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="look">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios'
export default {
  created() {
    this.show();
  },
  methods: {
    look(){
      console.log(this.data.tableData);
    },
    show() {
      axios({
        method: "get",
        url: "/petOwns"
      }).then(res => {
        this.tableData = res.data;
        console.log(res.data);
      });
    }
  },
  data() {
    return {
      tableData:''
    };
  }
};
</script>