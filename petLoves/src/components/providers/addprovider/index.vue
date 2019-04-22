<template>
    <div>
       <!-- 新增供应商 -->
    <el-button  type="primary" @click="dialogFormVisible = true">增加供应商</el-button>
    <el-dialog title="增加供应商" :visible.sync="dialogFormVisible">
      <el-form :model="form">
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
          <el-input v-model="form.addr" autocomplete="off"></el-input>
        </el-form-item>
        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addBtn" >增加</el-button>
      </div>
    </el-dialog>
    </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("yj");
export default {
data() {
    return {
      dialogFormVisible: false,
      form: {
        addr: "",
        name: "",
        number: "",
        person: "",
        phone: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
   methods: {
    addBtn() {
      
       this.dialogFormVisible = false
      
     
    },
    
  }
}
</script>

<style>

</style>
