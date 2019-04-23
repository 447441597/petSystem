<template>
    <div>
    <el-row>
      <el-col :span="3">
       <AddServer></AddServer>
      </el-col>
     
      <el-col :span="8">
        
      </el-col>
      
    </el-row>
  <el-table :data="services" style="width: 100%">
    <el-table-column label="服务名" prop="serviceName" style="width:20px"></el-table-column>
    <el-table-column label="服务类别" prop="types" style="width:20px"></el-table-column>
    <el-table-column label="服务时间段" prop="times" style="width:20px">

    </el-table-column>
    <el-table-column label="适用规格" prop="applyGuige" style="width:20px"></el-table-column>
    <el-table-column label="服务规格" prop="serverGuige" style="width:20px"></el-table-column>
    <el-table-column label="服务等级" prop="chooseLevel" style="width:20px"></el-table-column>
    <el-table-column label="耗时" prop="useTime" style="width:20px"></el-table-column>
    <el-table-column align="right">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
// import StudentItem from "./StudentItem"; createNamespacedHelpers
import { createNamespacedHelpers } from "vuex";
import axios from "axios";
import AddServer from './AddServer.vue'
const { mapState, mapActions } = createNamespacedHelpers("services");

export default {
  created() {
    this.getServices();
    console.log(showServices,"showServices");
  },
  computed: {
    ...mapState(["services", "pagination","times"])
  },
  methods: {
    ...mapActions(["getServices"])
  },
   components: {
   AddServer
  }
};
</script>

<style>
</style>
