<template>
    <div>
        <el-row>
              <el-button type="primary" @click="centerDialogVisible = true">增加</el-button>
        </el-row>
        <el-dialog
        title="增加(注:该增加只能增加平台管理员)"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
       <span>
         <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="手机号" prop="phone">
                <el-input type="text" v-model="ruleForm2.phone" autocomplete="off"></el-input>
               </el-form-item>
               <el-form-item label="密码" prop="pwd">
              <el-input type="password" v-model="ruleForm2.pwd" autocomplete="off" ></el-input>
              </el-form-item>
               <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
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
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("users");
export default {
  data() {
    var checkphone = (rule, value, callback) => {
      if (value) {
         if (/^1\d{10}$/.test(value)) {
        axios({
          method: "get",
          url: "/users/repeat",
          params: {
            phone: value
          }
        }).then(res => {
          if (res.data.status == 0) {
            callback("手机号重复");
          } else {
            callback();
          }
        });
      }else{
         return callback(new Error("手机号格式不正确"));
      }
      } else{
        return callback(new Error("请输入手机号"));
      }
      
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validatepwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    return {
      centerDialogVisible: false,
      radio: "男",
      ruleForm2: {
        phone: "",
        pwd: "",
        checkPass: ""
      },
      rules2: {
        phone: [{ validator: checkphone, trigger: "blur" }],
        pwd: [{ validator: validatepwd, trigger: "blur" }],
        checkPass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapActions(["setPersons"]),
    submitForm() {
      if (
        this.ruleForm2.phone != "" &&
        this.ruleForm2.pwd != "" &&
        this.ruleForm2.checkPass != ""
      ) {
        this.centerDialogVisible = false;
        axios({
          method: "post",
          url: "/users/AfterRegister",
          data: {
            phone: this.ruleForm2.phone,
            pwd: this.ruleForm2.checkPass
          }
        }).then(res => {
          this.setPersons();
        });
      }
    }
  }
};
</script>

<style>
</style>