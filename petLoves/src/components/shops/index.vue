<template>
    <div>
  <el-button type="primary"  @click="selected(true)" style="margin-bottom:20px">门店管理</el-button>
  <template v-if="select">
      <el-card class="box-card" >
        <div slot="header" class="clearfix">
          <h2>门店管理</h2>
        </div>
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
      label="地址"
      prop="address"
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
      <template slot-scope="scope" class="scope">
        <el-button
          size="mini"
          @click="handleDelete(scope.$index, scope.row)" type="danger" icon="el-icon-delete" circle></el-button>
          <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)" icon="el-icon-edit" type="primary" circle></el-button>
           <el-button type="primary"  @click="handlexamine(scope.$index, scope.row)" size="mini" style="margin-bottom:20px">审核</el-button>
      </template>
    </el-table-column>
     </el-table>
   </el-card>
  </template>
<template v-else>
        <el-card class="box-card" >
          <div slot="header" class="clearfix">
            <h2>审核进度</h2>
          </div>
        <el-steps :space="400" :active="active" >
          <el-step title="审核中"></el-step>
          <el-step title="已审核"></el-step>
        </el-steps>
       </el-card>
       </template>
    </div>
</template>

<script>
import { createNamespacedHelpers, mapMutations } from "vuex";
import axios from "axios";
const { mapActions, mapState } = createNamespacedHelpers("lwj");
export default {
  data() {
    return {
      select: true
    };
  },
  created() {
    this.setshops();
  },
  computed: {
    ...mapState(["shops", "pagiNation"])
  },
  methods: {
    ...mapActions(["setshops","setShop"]),
    ...mapMutations(["setActive"]),
    selected(data) {
      this.select = data;
    },
    handlexamine(index, row) {
      this.select=false;
      let id = row._id;
      console.log(id, "id");
       this.setShop(id);
    },
    handleDelete(index, row) {
      let id = row._id;
      this.$confirm(`门店名称:${row.name}`, "删除提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        showClose: false,
        type: "warning"
      })
        .then(() => {
          axios({
            method: "delete",
            url: "/shops/" + id
          }).then(res => {
            console.log(res);
            this.setshops();
            this.$message("删除成功");
          });
        })
        .catch(() => {
          this.$message("取消删除");
        });
    }
  }
};
</script>

<style>
.el-card {
  width: 100%;
}
.cell {
  text-align: center;
}
</style>
