<template>
    <div>
        <el-row>
              <el-button type="primary" @click="centerDialogVisible = true">增加</el-button>
        </el-row>
        <el-dialog
        title="增加"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
       <span>
         <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="姓名" prop="name">
                <el-input type="text" v-model="ruleForm2.name" autocomplete="off"></el-input>
               </el-form-item>
               <el-form-item label="年龄" prop="age">
              <el-input type="text" v-model="ruleForm2.age" autocomplete="off" ></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="gender">
            <el-radio v-model="radio" label="男">男</el-radio>
           <el-radio v-model="radio" label="女">女</el-radio>
            </el-form-item>
         </el-form>
       </span>
       <span slot="footer" class="dialog-footer">
       <el-button @click="centerDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitForm()">确 定</el-button>
     </span>
</el-dialog>

    </div>
</template>

<script>
// import InputElement from "../commonstudent/InputElement";
// import RadioInputElement from "../commonstudent/RadioInputElement";
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("studentMoudel");
export default {
  data() {
    var checkname = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("姓名不能为空"));
      } else {
        callback();
      }
    };
    var validateage = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("年龄不能为空"));
      } else {
        callback();
      }
    };
    return {
      centerDialogVisible: false,
      radio: "男",
      ruleForm2: {
        name: "",
        age: ""
      },
      rules2: {
        name: [{ validator: checkname, trigger: "blur" }],
        age: [{ validator: validateage, trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapActions(["setStudents"]),
    submitForm() {
      if (this.ruleForm2.name != "" && this.ruleForm2.age != "") {
        this.centerDialogVisible = false;
        axios({
          method: "post",
          url: "/students",
          data: {
            name: this.ruleForm2.name,
            age: this.ruleForm2.age,
            gender: this.radio
          }
        }).then(res => {
          this.setStudents();
        });
      }
    }
  }
};
</script>

<style>
</style>