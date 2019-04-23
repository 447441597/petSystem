<template>
    <div>
      <el-row>
  <!-- <el-button type="primary"  @click="selected(true)" style="margin-bottom:20px">门店管理</el-button>
  <el-button type="primary"  style="margin-bottom:20px" @click="selected(false)">门店审核</el-button> -->
  <div class="sousuo">
  <el-input placeholder="请输入内容" v-model="search.value" class="input-with-select">
    <el-select v-model="search.type" slot="prepend" placeholder="请选择">
      <el-option label="门店名称" value="storeName"></el-option>
      <el-option label="地址" value="address"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="searchBtn"></el-button>
  </el-input>
</div>
</el-row>
 <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="门店管理" name="first"> 
       <template >
    <el-table :data="shops" style="width: 100%">
    <el-table-column label="门店名称" prop="storeName" width="120">
    </el-table-column>
    <el-table-column label="营业执照号码" prop="businessNum" width="120">
    </el-table-column>
      <el-table-column label="营业执照" prop="businessImage" width="120">
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
          @click="handleDelete(scope.$index, scope.row)" type="danger" icon="el-icon-delete" circle></el-button>
          <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)" icon="el-icon-edit" type="primary" circle></el-button>
      </template>
    </el-table-column>
     </el-table>
  </template>
    </el-tab-pane>
    <el-tab-pane label="门店审核" name="second" >
       <template >
           <el-table
    :data="shops"
    style="width: 100%">
    <el-table-column
      label="门店名称"
      prop="storeName"
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
    <el-table-column label="操作">
      <template slot-scope="scope" class="scope">
        <el-button
          size="mini"
          @click="handleExamine(scope.$index, scope.row)" type="danger" circle>审核</el-button>
      </template>
    </el-table-column>
     </el-table>
       </template>
    </el-tab-pane>
  </el-tabs>
       <update></update>
       <examine :info='info'></examine>
       <page></page>
       <assistant :zhiyuan='zhiyuan'></assistant>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import axios from "axios";
import Update from "./update.vue";
import Page from "./page.vue";
import Examine from "./examine.vue";
import Assistant from './assistant.vue'
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("lwj");
export default {
  data() {
    return {
      // dialogVisible: false,
      select: true,
      activeName: "first",
      info: [],
      zhiyuan:[]
    };
  },
  created() {
    this.getok();
   
    // this.setshops()
  },
  computed: {
    ...mapState(["shops", "pagiNation", "search"]),
    value: {
      get() {
        return this.search.value;
      },
      set(value) {
        this.setSearch({
          ...this.search,
          value
        });
      }
    },
    type: {
      get() {
        return this.search.type;
      },
      set(type) {
        this.setSearch({
          ...this.search,
          type
        });
      }
    }
  },
  methods: {
    ...mapActions(["setshops", "setShop","getno",'getok']),
    ...mapMutations(["setActive", "setSearch", "setVisible","setdialogVisible"]),
    selected(data) {
      this.select = data;
    },
    handleClick(value) {
      console.log(value.label);
      if(value.label == '门店审核'){
      this.getno();
      }else{
        this.getok()
      }
    },
    look(index,row){
      this.setdialogVisible(true)
      // let id = row._id;
      console.log(row.assistant,"数据")
      this.zhiyuan = [];
      this.zhiyuan.push(row.assistant)
    },
    handleEdit(index, row) {
      let id = row._id;
      console.log(row)
      this.setShop(id);
    },
    handleExamine(index, row) {
      // let id = row._id;
      // console.log(row,'row')
      this.info = [];
      this.info.push(row);
      this.setVisible(true);
      console.log(this.info, "info");
      
    },
    handleDelete(index, row) {
      let id = row._id;
      console.log(id, "id");
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
            console.log(res);
            this.setshops();
            this.$message("删除成功");
          });
        })
        .catch(() => {
          this.$message("取消删除");
        });
    },
    searchBtn() {
      console.log(123123);
      this.getok({
        type: this.search.type,
        value: this.search.value
      });
    }
  },
  components: { Update, Page, Examine ,Assistant}
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
