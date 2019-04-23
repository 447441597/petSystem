<template>
  <el-table
    :data="pet.rows"
    border
    style="width: 100%"
    row-key="_id"
    >
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
      <template slot-scope="scope">
      <el-button type="primary" size="small" @click="vip(scope.$index, scope.row)" >查看</el-button>
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
      width="100">
    </el-table-column>
     <el-table-column
      prop="truename"
      label="状态"
      width="100">
      <template slot-scope="scope" >
        <el-button type="primary" size="small" v-if="scope.row.store" @click="setsto(scope.$index, scope.row)">拉黑</el-button>
        <el-button type="primary" size="small" v-else @click="setsto(scope.$index, scope.row)">恢复</el-button>
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
    ...mapMutations(["setIdent", "setPets", "setVip", "vips"]),
    ...mapActions(["setPet"]),
    vip(index, row) {
      axios({
        method: "get",
        url: "/petOwns/id/" + row._id
      }).then(res => {
        let arr = [];
        for (let i in res.data) {
          arr.push(res.data[i].shops);
        }
        this.vips(arr);
      });
      this.setVip(row);
    },
    look(index, row) {
      this.setPets(row.pets);
      this.setIdent();
    },
    setsto(index, row) {
      axios({
        method: "put",
        url: "/petOwns/mod/" + row._id,
        data: row
      }).then(res => {
        this.setPet();
      });
    }
  }
};
</script>