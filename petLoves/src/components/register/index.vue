<template>
    <div>
         <div style="width:100%">
            <el-card class="box-card" style="width:35%;margin:auto;">
            <div slot="header" class="clearfix">
            <span>注册</span>
             </div>
             <div class="text item">
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号类别" prop="type">
                <el-input v-model="ruleForm2.type"  placeholder="输入注册类型  1为宠主注册  0为门店管理员注册 "></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="phone">
                <el-input v-model="ruleForm2.phone"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                </el-form-item>
              <el-form-item>
             <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
             <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
             </el-form>
           </div>
     </el-card>
  </div>
    </div>
</template>

<script>
// import InputElement from "../common/InputElement";
import axios from "axios";
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        if (/^1\d{10}$/.test(value)) {
          // console.log(value)
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
        } else {
          callback("手机号格式不正确");
        }
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var checktype = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号类别0或1"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        checkPass: "",
        phone: "",
        type:"",
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: checkAge, trigger: "blur" }],
        type: [{ validator: checktype, trigger: "blur" }],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            console.log(this.ruleForm2.type)
         if(this.ruleForm2.type==0){
              axios({
            method: "post",
            url: "/users/shopRegister",
            data: {
              phone: this.ruleForm2.phone,
              pwd: this.ruleForm2.checkPass
            }
          }).then(res => {
            this.$router.push({ path: "/login" });
          });
         }else if(this.ruleForm2.type==1){
              axios({
            method: "post",
            url: "/users/SpoilRegister",
            data: {
              phone: this.ruleForm2.phone,
              pwd: this.ruleForm2.checkPass
            }
          }).then(res => {
            this.$router.push({ path: "/login" });
          });
         }else{
           alert("注册失败！请输入正确的注册类型0或1")
         }
        } else {
          alert("格式验证未通过!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
</style>
