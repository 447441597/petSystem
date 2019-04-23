<template>
    <div>
       <!-- <el-button type="primary"  @click="selected(true)" style="margin-bottom:20px">申请门店</el-button>
       <el-button type="primary"    @click="selected(false)"  style="margin-bottom:20px">申请进度</el-button> -->
          <template>
            <el-card class="box-card" >
               <div slot="header" class="clearfix">
                 <div style="text-align:center"> <h2>申请门店</h2></div>
                  <el-steps :space="400" :active="active" align-center>
          <el-step title="基本信息填写"></el-step>
          <el-step title="正在审核中"></el-step>
           <el-step title="已审核"></el-step>
        </el-steps>
                 </div>
         <el-form :model="form" :rules="rules"  ref="form" >
           <el-form-item label="门店名称" :label-width="formLabelWidth" prop="storeName">
              <el-input v-model="form.storeName" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="营业执照号码" :label-width="formLabelWidth" prop="businessNum">
              <el-input v-model="form.businessNum" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="营业执照" :label-width="formLabelWidth">
             <el-upload
                     class="upload-demo"
                     action="/upload"
                     :on-preview="handlePreview"
                     :on-remove="handleRemove"
                     :before-remove="beforeRemove"
                     multiple
                     :limit="3"
                     :on-exceed="handleExceed"
                     :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
           </el-form-item>
           <el-form-item label="地址" :label-width="formLabelWidth" prop="address">
              <el-input v-model="form.address" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="法人" :label-width="formLabelWidth" prop="legalPerson">
              <el-input v-model="form.legalPerson" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth" prop="tel">
              <el-input v-model="form.tel" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="头图" :label-width="formLabelWidth">
              <!-- <el-upload
                     class="upload-demo"
                     action="https://jsonplaceholder.typicode.com/posts/"
                     :on-preview="handlePreview"
                     :on-remove="handleRemove"
                     :before-remove="beforeRemove"
                     multiple
                     :limit="3"
                     :on-exceed="handleExceed"
                     :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload> -->
           </el-form-item>
            <el-form-item label="特色" :label-width="formLabelWidth" prop="feature">
              <el-input v-model="form.feature" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="VIP等级" :label-width="formLabelWidth" prop="vipLeval">
              <el-input v-model="form.vipLeval" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="佣金比例" :label-width="formLabelWidth" prop="rate">
              <el-input v-model="form.rate" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="店员姓名" :label-width="formLabelWidth" prop="assistantname">
              <el-input v-model="form.assistantname" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="店员职级" :label-width="formLabelWidth" prop="assistantlevel">
              <el-input v-model="form.assistantlevel" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="店员电话" :label-width="formLabelWidth" prop="assistantphone">
              <el-input v-model="form.assistantphone" autocomplete="off"></el-input>
           </el-form-item>
        </el-form>
           <div class="footer">
              <el-button type="primary" @click="resetForm('form')">重置</el-button>
              <el-button type="primary" @click="submitForm('form')" >提交</el-button>
           </div>
       </el-card>
        </template>
    </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("lwj");
export default {
  data() {
    return {
      select: true,
      // active: 0,
      form: {
        storeName: "",
        businessNum: "",
        legalPerson: "",
        address: "",
        tel: "",
        feature: "",
        vipLeval: "",
        rate: "",
        assistantname: "",
        assistantlevel: "",
        assistantphone: ""
      },
      formLabelWidth: "120px",
      rules: {
        storeName: [{ required: true, message: "请输入内容", trigger: "blur" }],
        businessNum: [
          { required: true, message: "请输入内容", trigger: "blur" }
        ],
        legalPerson: [
          { required: true, message: "请输入内容", trigger: "blur" }
        ],
        address: [{ required: true, message: "请输入内容", trigger: "blur" }],
        tel: [{ required: true, message: "请输入内容", trigger: "blur" }],
        feature: [{ required: true, message: "请输入内容", trigger: "blur" }],
        vipLeval: [{ required: true, message: "请输入内容", trigger: "blur" }],
        rate: [{ required: true, message: "请输入内容", trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapState(["active"])
  },
  methods: {
    ...mapMutations(["setActive"]),
    selected(data) {
      this.select = data;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let assistant = [];
          assistant.push({
            assistantname: this.form.assistantname,
            assistantlevel: this.form.assistantlevel,
            assistantphone: this.form.assistantphone
          });
          console.log(this.form.storeName);
          axios({
            method: "post",
            url: "/applys",
            data: {
              storeName: this.form.storeName,
              businessNum: this.form.businessNum,
              tel: this.form.tel,
              legalPerson: this.form.legalPerson,
              feature: this.form.feature,
              vipLeval: this.form.vipLeval,
              rate: this.form.rate,
              address: this.form.address,
              assistant
            }
          }).then(res => {
            console.log(res);
            // if (this.active == 0) {
            //   this.setActive(1);
            //   console.log(this.active, "this.active");
            // }
          });
          this.$message({
            type: "success",
            message: "提交成功!"
          });
        } else {
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
.footer {
  text-align: center;
}
</style>