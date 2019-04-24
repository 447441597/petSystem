
<template>
      <el-table
       :data="persons"
       row-key="_id"
       style="width: 80%">
      <el-table-column
        prop="phone"
        label="用户名"
        width="180">
        
       </el-table-column>
       <el-table-column
         prop="pwd"
         label="密码"
         width="180">
        </el-table-column>
        <el-table-column
         prop="privilege"
         label="账号类别">
        </el-table-column>
         <el-table-column
         label="操作">
          <template slot-scope="scope">
              <el-button type="primary"  @click="update(scope.$index, scope.row)" >修改</el-button>
               <el-button type="danger" @click="del(scope.$index, scope.row)">删除</el-button>
         </template>
        </el-table-column>
       </el-table>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("users");
export default {
  created() {
    this.setPersons();
  },
  computed: {
    ...mapState(["persons"])
  },

  methods: {
    ...mapActions(["setPersons", "updatePersons"]),

    del(index, row) {
      console.log(row._id);
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios({
            method: "delete",
            url: "/users/" + row._id
          }).then(res => {
            this.setPersons();
          });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    update(index, row) {
      axios({
        method: "get",
        url: "/users/" + row._id
      }).then(res => {
        console.log(res.data, "22");
        if (res.data.privilege == 2) {
          this.updatePersons(row._id);
        } else {
          alert("抱歉！您只能修改平台管理员账号，账号类型为2");
        }
      });
    }
  }
};
</script>

<style>
</style>

