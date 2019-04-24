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
      <tabstocks></tabstocks>
    </el-tab-pane>
    <el-tab-pane label="门店审核" name="second" >
      <tabexam></tabexam>
    </el-tab-pane>
  </el-tabs>
       <update></update>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import axios from "axios";
import Update from "./update.vue";
import Page from "./page.vue";
import Examine from "./examine.vue";
import Tabstocks from './tabstocks.vue';
import Tabexam from './tabexam.vue'
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
    searchBtn() {
      console.log(123123);
      this.getok({
        type: this.search.type,
        value: this.search.value
      });
    }
  },
  components: { Update, Page, Examine ,Tabstocks,Tabexam}
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
