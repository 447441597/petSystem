<template>
    <div>
     <!-- 供应商列表 -->
 <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>供应商信息</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
  <div  class="text item">
     <el-table :data="providers" stripe style="width: 100%">
    <el-table-column prop="name" label="供应商名称" width="180"></el-table-column>
    <el-table-column prop="person" label="法人代表" width="180"></el-table-column>
    <el-table-column prop="number" label="营业执照号" width="180"></el-table-column>
    <el-table-column prop="phone" label="供应商号码" width="180"></el-table-column>
    <el-table-column prop="addr" label="供应商地址"></el-table-column>
   
     <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</el-card>
    </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("yj");
export default {
 created() {
    this.setProviders();
  },
  
  methods: {
    ...mapActions(["setProviders"]),
    ...mapActions(["updateProviders"]),
    handleEdit(index, row) {
         let id=row._id
        this.updateProviders(id)
      },
      handleDelete(index, row) {
       let id=row._id
           this.$confirm('此操作将删除该供应商, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
              axios({
                        method: "delete",
                        url: "/providers/" + id
                    }).then(() => {
                        this.setProviders()

                    })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
                
                
      }
   
      
  },
  computed:{
   ...mapState(["providers"]),
  
  },
}
</script>

<style>
.box-card{width: 70%;margin: auto}
</style>
