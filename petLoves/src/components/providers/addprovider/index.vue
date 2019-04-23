<template>
    <div>
<!-- 搜索 -->



<el-row>
   <!-- <el-button  type="primary" @click="dialogFormVisible = true">增加供应商</el-button>
 <div class="sousuo">
  <el-input placeholder="请输入内容" v-model="search.value" class="input-with-select">
    <el-select v-model="search.type" slot="prepend" placeholder="请选择">
       <el-option label="供应商名称" value="name" ></el-option>
      <el-option label="供应商电话"  value="phone" ></el-option>
      <el-option label="供应商地址" value="address"  ></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="searchBtn"></el-button>
  </el-input>
</div> -->
</el-row>

       <!-- 新增供应商 -->
   
    <!-- <el-dialog title="增加供应商" :visible.sync="dialogFormVisible">
      <el-form  :model="form">
        <el-form-item label="供应商名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="营业执照号" :label-width="formLabelWidth">
          <el-input v-model="form.number" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="法人代表" :label-width="formLabelWidth">
          <el-input v-model="form.person" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="供应商号码" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="供应商地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addBtn" >增加</el-button>
      </div>
    </el-dialog> -->
    </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState,mapMutations } = createNamespacedHelpers("yj");
export default {
// data() {
//     return {
//       dialogFormVisible: false,
//       form: {
//         address: "",
//         name: "",
//         number: "",
//         person: "",
//         phone: "",
//         date1: "",
//         date2: "",
//         delivery: false,
//         type: [],
//         resource: "",
//         desc: ""
//       },
//       formLabelWidth: "120px"
//     };
//   },
//   computed: {
//     ...mapState(["search"]),
//     value: {
//       get() {
//         return this.search.value;
//       },
//       set(value) {
//         this.setSearch({
//           ...this.search,
//           value
//         });
//       }
//     },
//     type: {
//       get() {
//         return this.search.type;
//       },
//       set(type) {
//         this.setSearch({
//           ...this.search,
//           type
//         });
//       }
//     }
//   },
//   methods: {
//      ...mapMutations(["setSearch"]),
//     ...mapActions(["setProviders"]),
    
 


//     addBtn(formName) {
//       axios({
//         method: "post",
//         url: "/providers",
//         data: {
//           name: this.form.name,
//           phone: this.form.phone,
//           person: this.form.person,
//           address: this.form.address,
//           number: this.form.number,
//         }
//       }).then(() => {
//         this.form.name="";
//         this.form.phone="";
//         this.form.person="";
//         this.form.address="";
//         this.form.number="";
//        this.dialogFormVisible = false;
//         this.setProviders();

//       });
//     },

//     searchBtn() {
//       console.log(123123);
//       this.setProviders({
//         type: this.search.type,
//         value: this.search.value
//       });
//     }
    
//   }
}
</script>

<style>
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
}
</style>
