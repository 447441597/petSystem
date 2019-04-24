<template>
    <div style="width:100% ">
            <el-card class="box-card" style="width:35%;margin:auto;">
            <div slot="header" class="clearfix">
            <span>登录</span>
             </div>
             <div class="text item">
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="手机号" prop="pass">
                <el-input type="text" v-model="ruleForm2.pass" autocomplete="off"></el-input>
               </el-form-item>
               <el-form-item label="密码" prop="pwd">
              <el-input type="password" v-model="ruleForm2.pwd" autocomplete="off" ></el-input>
              </el-form-item>
              <el-form-item>
             <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
             <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
             </el-form>
           </div>
     </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
 data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("手机号不能为空"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        pwd: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        pwd: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios({
            method: "post",
            url: "/users/login",
            data: {
              phone: this.ruleForm2.pass,
              pwd: this.ruleForm2.pwd
            }
          }).then(res => {
            console.log(res.data);
            if (res.data.privilege=="2") {
              this.$router.push({ path: "/manage" });
            }else if(res.data.privilege=="0"){
              this.$router.push({ path: "/shopManage" });
            } else {
              alert("手机号密码错误");
            }
          });
        }else {
           alert('格式验证未通过!!');
            return false;
          }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
