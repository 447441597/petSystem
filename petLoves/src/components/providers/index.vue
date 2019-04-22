<template>
    <div>

 <!-- 新增供应商 -->
          <el-button type="primary" @click="dialogFormVisible = true">增加供应商</el-button>
    <el-dialog title="增加供应商" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="供应商名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
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

 <!-- 供应商列表 -->
      <el-table :data="students" stripe style="width: 100%">
    <el-table-column prop="name" label="供应商名称" width="180"></el-table-column>
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
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("studentMoudel");
export default {
data() {
    return {
      dialogFormVisible: false,
      form: {
        addr: "",
        name: "",
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

