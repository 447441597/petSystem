<template>
  <el-table :data="serverTypes" style="width: 100%" row-key="_id">
    <el-table-column label="品类" prop="typeName" style="width:20px"></el-table-column>
    <el-table-column label="价格" prop="typePrice" style="width:20px"></el-table-column>
    <el-table-column align="right">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import axios from "axios";
const { mapState, mapActions } = createNamespacedHelpers("serverType");
export default {
  created() {
    this.getTypes();
  },
  computed: {
    ...mapState(["serverTypes"])
  },
  methods: {
    ...mapActions(["getTypes", "setVisible", "getType"]),
    handleEdit(index, row) {
      console.log("修改");
      this.setVisible(true);
      //   axios({
      //     method: "get",
      //     url: "/serverTypes/" + row._id
      //   }).then(res => {
      //     console.log("修改的服务", res.data);
      //     this.getType(res.data);
      //   });
      this.getType(row._id);
    },
    handleDelete(index, row) {
      this.$confirm("确认删除？")
        .then(() => {
          axios({
            method: "delete",
            url: "/serverTypes/" + row._id
          }).then(res => {
            this.getServices();
          });
        })
        .catch(_ => {});
    }
  }
};
</script>

<style>
</style>
