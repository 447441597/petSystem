<template>
    <div>
       <!-- <el-button type="primary"  @click="selected(true)" style="margin-bottom:20px">申请门店</el-button>
       <el-button type="primary"    @click="selected(false)"  style="margin-bottom:20px">申请进度</el-button> -->
          <template>
            <el-card class="box-card" >
               <div slot="header" class="clearfix">
                 <div style="text-align:center"> <h2>申请门店</h2></div>
                  </div>
        <template v-if="status">
          <el-steps :space="600" :active="active" align-center>
          <el-step title="正在审核中"></el-step>
          <el-step title="已审核"></el-step>
          <!-- <el-step title="未通过"></el-step> -->
        </el-steps>
        <template style="width:100%;text-align:center" v-if="active==1">
           <div style="margin-bottom:40px;margin-top:30px ">提交成功，正在审核你的店铺，请耐心等待</div> 
          <el-button type="primary"    @click="back"  style="margin-bottom:20px">返回登录</el-button>
        </template>
        <template v-if="active==2">
          <div style="margin-bottom:40px;margin-top:30px ">恭喜你，门店申请成功</div> 
          <el-button type="primary"    @click="back"  style="margin-bottom:20px">返回登录</el-button>
        </template>
        </template>
        <template v-else >
         <el-form :model="form" :rules="rules"  ref="form" >
           <el-form-item label="门店名称" :label-width="formLabelWidth" prop="storeName">
              <el-input v-model="form.storeName" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="营业执照号码" :label-width="formLabelWidth" prop="businessNum">
              <el-input v-model="form.businessNum" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="营业执照" :label-width="formLabelWidth" prop="businessImage">
            <el-upload
                class="avatar-uploader"
                action="/applys/upload"
                 v-model="form.businessImage"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
           </el-form-item>
           <el-form-item label="地址" :label-width="formLabelWidth" prop="address">
              <el-input v-model="form.address" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="经度" :label-width="formLabelWidth" prop="longitude">
              <el-input v-model="form.longitude" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="维度" :label-width="formLabelWidth" prop="latitude">
              <el-input v-model="form.latitude" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="法人" :label-width="formLabelWidth" prop="legalPerson">
              <el-input v-model="form.legalPerson" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth" prop="tel">
              <el-input v-model="form.tel" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="门店图片" :label-width="formLabelWidth" prop="headImage">
             <el-upload
              class="avatar-uploader"
              action="applys/upload"
               v-model="form.headImage"
              :on-success="handSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageurl" :src="imageurl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
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
           <el-button type="primary" size="mini" @click="add" style="margin-left:50px;margin-bottom:50px">添加店员</el-button>
           <el-dialog
            title="添加店员"
            :visible.sync="dialogVisible"
            width="30%">
            <el-form-item label="店员姓名" :label-width="formLabelWidth" prop="assistantname">
              <el-input v-model="form.assistantname" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="店员职级" :label-width="formLabelWidth" prop="assistantlevel">
              <el-input v-model="form.assistantlevel" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="店员电话" :label-width="formLabelWidth" prop="assistantphone">
              <el-input v-model="form.assistantphone" autocomplete="off"></el-input>
           </el-form-item>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="sure" >确 定</el-button>
            </span>
            </el-dialog>
        </el-form>
           <div class="footer">
              <el-button type="primary" @click="resetForm('form')">重置</el-button>
              <el-button type="primary" @click="submitForm('form')" >提交</el-button>
           </div>
           </template>
       </el-card>
        </template>
    </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("lwj");
let assistant = [];
export default {
  data() {
    return {
      ID: "",
      location : {},
      shopid: "",
      dialogVisible: false,
      select: false,
      // temp: 0,
      active: 1,
      shopsinfo: {},
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
        assistantphone: "",
        headImage: "",
        businessImage: "",
        longitude:"",
        latitude:""
      },
      formLabelWidth: "120px",
      imageUrl: "",
      imageurl: "",
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
        rate: [{ required: true, message: "请输入内容", trigger: "blur" }],
        //  longitude: [{ required: true, message: "请输入内容", trigger: "blur" }],
        //   latitude: [{ required: true, message: "请输入内容", trigger: "blur" }],
        businessImage: [
          { required: true, message: "请上传营业执照图片", trigger: "blur" }
        ],
        headImage: [
          { required: true, message: "请上传门店图片", trigger: "blur" }
        ]
      }
    };
  },
  computed: {
    ...mapState(["active", "status", "userId"])
  },
  created() {
    this.getTemp(),
      axios({
        method: "get",
        url: "/users/" + this.userId
      }).then(res => {
        for (let i = 0; i < res.data.length; i++) {
          this.shopid = res.data[i].shopsId;
        }
        let id = this.shopid;
        axios({
          method: "get",
          url: "/shops/" + id
        }).then(data => {
          this.shopsinfo = data.data;
          if (data.data.active == 3) {
            this.active += 1;
          }
         
        });
      });
  },
  methods: {
    ...mapMutations(["setActive", "setTemp"]),
    ...mapActions(["getTemp"]),
    handleAvatarSuccess(response, file, fileList) {
      this.imageUrl = "/images/" + response;
      this.form.businessImage = response;
    },
    back(){
         location="../login/index.vue"
    },
    handSuccess(response, file, fileList) {
      this.imageurl = "/images/" + response;
      this.form.headImage = response;
    },
    back(){
location = "../login"
    },
    sure() {
      assistant.push({
        assistantname: this.form.assistantname,
        assistantlevel: this.form.assistantlevel,
        assistantphone: this.form.assistantphone
      });
      (this.form.assistantname = ""),
        (this.form.assistantlevel = ""),
        (this.form.assistantphone = "");
      this.dialogVisible = false;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (assistant.length > 0) {
           this.location={
              longitude:this.form.longitude,
              latitude:this.form.latitude
            }
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
                assistant,
                active: this.active,
                businessImage: this.form.businessImage,
                headImage: this.form.headImage,
                location:this.location
              }
            }).then(res => {
              this.ID = res.data._id;
              axios({
                method: "get",
                url: "/users/" + this.userId
              }).then(info => {
                this.setTemp(1);
                let qq = info.data._id;
                info.data.shopsId = this.ID;
                info = info.data;
                delete info._id;
                axios({
                  method: "put",
                  url: "/users/" + qq,
                  data: info
                });
              });
            });
            this.$message({
              type: "success",
              message: "提交成功!"
            });
          } else {
            this.$message({
              message: "请输入店员信息"
            });
          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    add() {
      this.dialogVisible = true;
    }
  }
};
</script>

<style>
.footer {
  text-align: center;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>