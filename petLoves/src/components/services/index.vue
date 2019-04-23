<template>
  <div>
    <UpdateServer></UpdateServer>
     <Times></Times>
    <el-row>
      <el-col :span="3">
        <AddServer></AddServer>
      </el-col>

      <el-col :span="8">
        <SearchServer></SearchServer>
      </el-col>
    </el-row>
    <el-table :data="services" style="width: 100%" row-key="_id">
      <el-table-column label="服务名" prop="serviceName" style="width:20px"></el-table-column>
      <el-table-column label="服务类别" prop="serverType" style="width:20px"></el-table-column>
      <el-table-column label="服务时间段" prop="times" style="width:20px">
        <template slot-scope="scope">
          <el-button size="mini" @click="showTime(scope.$index, scope.row)">查看</el-button>
         
        </template>
      </el-table-column>
      <el-table-column label="适用规格" prop="applyGuige" style="width:20px"></el-table-column>
      <el-table-column label="服务规格" prop="serverGuige" style="width:20px"></el-table-column>
      <el-table-column label="服务等级" prop="level" style="width:20px"></el-table-column>
      <el-table-column label="耗时" prop="useTime" style="width:20px"></el-table-column>
      <el-table-column label="价格" prop="price" style="width:20px"></el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Page></Page>
  </div>
</template>

<script>
// import StudentItem from "./StudentItem"; createNamespacedHelpers
import { createNamespacedHelpers } from "vuex";
import axios from "axios";
import AddServer from "./AddServer.vue";
import UpdateServer from "./UpdateServer.vue";
import Times from './Times.vue';
import SearchServer from './SearchServer.vue';
import Page from './Page.vue'
const { mapState, mapActions } = createNamespacedHelpers("services");

export default {
  created() {
    this.getServices();
  },
  computed: {
    ...mapState(["services", "pagination", "times"])
  },
  methods: {
    ...mapActions(["getServices", "setVisible", "setService","setTimeVisible","getService"]),
    handleEdit(index, row) {
      console.log("修改");
      this.setVisible(true);
      axios({
        method: "get",
        url: "/services/" + row._id
      }).then(res => {
        console.log("修改的服务", res.data);
        this.setService(res.data);
      });
    },
    handleDelete(index, row) {
      this.$confirm("确认删除？")
        .then(() => {
          axios({
            method: "delete",
            url: "/services/" + row._id
          }).then(res => {
            this.getServices();
          });
        })
        .catch(_ => {});
    },
    showTime(index,row){
      this.setTimeVisible(true);
      this.getService(row._id);
    }
  },
  components: {
    AddServer,
    UpdateServer,
    Times,
    SearchServer,
    Page
  }
};
</script>

<style>
</style>
