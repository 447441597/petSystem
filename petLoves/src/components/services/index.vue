<template>
  <el-table :data="services" style="width: 100%">
    <el-table-column label="服务名" prop="name"></el-table-column>
    <el-table-column label="服务类别" prop="types"></el-table-column>
    <el-table-column label="服务时间段" prop="time"></el-table-column>
    <el-table-column label="适用规格" prop="applyGuige"></el-table-column>
    <el-table-column label="服务规格" prop="serverGuige"></el-table-column>
    <el-table-column label="服务等级" prop="level"></el-table-column>
     <el-table-column label="耗时" prop="useTime"></el-table-column>
    <el-table-column align="right">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// import StudentItem from "./StudentItem"; createNamespacedHelpers
import { createNamespacedHelpers } from "vuex";
import axios from "axios";
const { mapState, mapActions } = createNamespacedHelpers("services");
export default {
  
  created(){
      this.getServices();
      console.log("created");
  },
  computed: {
    ...mapState(["services","pagination"])
  },
  methods: {
    ...mapActions(["getServices"]),
    // handleEdit(index, row) {
    //   this.setVisible(true);
    //   axios({
    //     method: "get",
    //     url: "/students/" + row._id
    //   }).then(res => {
    //     console.log("修改的学生", res.data);
    //     this.setStudent(res.data);
    //   });
    // },
    // handleDelete(index, row) {
    //   this.$confirm("确认删除？")
    //     .then(() => {
    //       axios({
    //         method: "delete",
    //         url: "/students/" + row._id
    //       }).then(res => {
    //         this.getStudents({page:this.pagination.curpage});
    //       });
    //     })
    //     .catch(_ => {});
    // },
  }
};
</script>

<style>
</style>
