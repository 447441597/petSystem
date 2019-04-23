<template>
    <div>
       <el-button type="primary"  @click="selected(true)" style="margin-bottom:20px">申请门店</el-button>
       <el-button type="primary"    @click="selected(false)"  style="margin-bottom:20px">申请进度</el-button>
          <template v-if="select">
            <el-card class="box-card" >
               <div slot="header" class="clearfix">
                  <h2>申请门店</h2>
                 </div>
         <el-form :model="form">
           <el-form-item label="门店名称" :label-width="formLabelWidth">
              <el-input v-model="form.storeName" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="营业执照号码" :label-width="formLabelWidth">
              <el-input v-model="form.businessNum" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="营业执照" :label-width="formLabelWidth">
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
           <el-form-item label="地址" :label-width="formLabelWidth">
              <el-input v-model="form.address" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="法人" :label-width="formLabelWidth">
              <el-input v-model="form.legalPerson" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth">
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
            <el-form-item label="特色" :label-width="formLabelWidth">
              <el-input v-model="form.feature" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="VIP等级" :label-width="formLabelWidth">
              <el-input v-model="form.vipLeval" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="佣金比例" :label-width="formLabelWidth">
              <el-input v-model="form.rate" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="店员姓名" :label-width="formLabelWidth">
              <el-input v-model="form.assistantname" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="店员职级" :label-width="formLabelWidth">
              <el-input v-model="form.assistantlevel" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="店员电话" :label-width="formLabelWidth">
              <el-input v-model="form.assistantphone" autocomplete="off"></el-input>
           </el-form-item>
        </el-form>
           <div class="footer">
              <el-button>取 消</el-button>
              <el-button type="primary"  @click="add" >提交</el-button>
           </div>
       </el-card>
        </template>
         <template v-else>
           <el-card class="box-card" >
              <div slot="header" class="clearfix">
                  <h2>审核进度</h2>
                 </div>
        <el-steps :space="400" :active="active" >
          <el-step title="审核中"></el-step>
          <el-step title="已审核"></el-step>
        </el-steps>
       </el-card>
       </template>
    </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions,mapState,mapMutations } = createNamespacedHelpers("lwj");
export default {
  data() {
    return {
      select: true,
      // active: 0,
      form: {
        storeName: "",
        businessNum: "",
        legalPerson: "",
        address:"",
        tel: "",
        feature: "",
        vipLeval: "",
        rate: "",
        assistantname: "",
        assistantlevel: "",
        assistantphone: ""
      },
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapState(["active" ])
  },
  methods: {
     ...mapMutations(["setActive"]),
    selected(data) {
      this.select = data;
    },
    add() {
      let assistant = [];
      assistant.push({
        assistantname: this.form.assistantname,
        assistantlevel: this.form.assistantlevel,
        assistantphone: this.form.assistantphone
      });
      console.log(this.form.storeName)
      axios({
        method: "post",
        url: "/applys",
        data: {
          name: this.form.storeName,
          businessNum: this.form.businessNum,
          tel: this.form.tel,
          legalPerson: this.form.legalPerson,
          feature: this.form.feature,
          vipLeval: this.form.vipLeval,
          rate: this.form.rate,
          address:this.form.address,
          assistant
        }
      }).then(res => {
        console.log(res);
        if(this.active==0){
          this.setActive(1)
          console.log(this.active,'this.active')
        }
      });
    }
  }
};
</script>

<style>
.footer {
  text-align: center;
}
</style>