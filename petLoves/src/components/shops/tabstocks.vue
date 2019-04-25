<template>
    <div>
     <el-table :data="shops" style="width: 100%">
    <el-table-column label="门店名称" prop="storeName" width="120">
    </el-table-column>
    <el-table-column label="营业执照号码" prop="businessNum" width="120">
    </el-table-column>
      <el-table-column label="营业执照" prop="businessImage" width="120">
        <template slot-scope="scope" >
           <img :src="'http://localhost:3005/images/'+ scope.row.businessImage" width="60" height="60" >
        </template>
    </el-table-column>
     <el-table-column label="地址" prop="address" width="120">
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
      label="门店图片"
      prop="headImage"
      width="120">
      <template slot-scope="scope" >
           <img :src="'http://localhost:3005/images/'+ scope.row.headImage" width="60" height="60" >
        </template>
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
      label="职员信息"
      prop="assistant"
      width="120">
      <template slot-scope="scope" >
      <el-button type="text"  @click="look(scope.$index, scope.row)">查看</el-button>
      </template>
    </el-table-column>
   
    <el-table-column label="操作">
      <template slot-scope="scope" class="scope">
        <el-button
          size="mini"
          @click="handleDelete(scope.$index, scope.row)" type="danger" circle>删除</el-button>
          <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"  type="primary" circle>修改</el-button>
      </template>
    </el-table-column>
     </el-table>
      <update></update>
       <page></page>
       <assistant></assistant>
     </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import axios from "axios";
import Page from "./page.vue";
import Update from "./update.vue";
import Assistant from "./assistant.vue";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("lwj");
export default {
  data() {
    return {
      // dialogVisible: false,
      select: true,
      activeName: "first"
    };
  },
  computed: {
    ...mapState(["shops", "pagiNation", "search"])
  },
  methods: {
    ...mapActions(["setshops", "setShop", "getno", "getok"]),
    ...mapMutations([
      "setActive",
      "setSearch",
      "setVisible",
      "setdialogVisible"
    ]),
    selected(data) {
      this.select = data;
    },
    look(index, row) {
      this.setdialogVisible(row.assistant);
    },
    handleEdit(index, row) {
      let id = row._id;
      this.setShop(id);
    },
    handleDelete(index, row) {
      let id = row._id;
      this.$confirm(`门店名称:${row.storeName}`, "删除提示", {
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
            this.getok();
            this.$message("删除成功");
          });
        })
        .catch(() => {
          this.$message("取消删除");
        });
    }
  },
  components: { Update, Page, Assistant }
};
</script>

<style>
.el-card {
  width: 100%;
}
.cell {
  text-align: center;
}
.el-input__inner .el-input--prefix {
  width: 200px;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-row {
  display: flex;
}
.sousuo {
  margin-left: 5px;
  margin-bottom: 10px;
}
</style>

