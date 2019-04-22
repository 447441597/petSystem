<template>
    <div>
       <el-button type="primary"  @click="dialogFormVisible = true">申请门店</el-button>
       <el-button type="primary"  @click="dialogVisible = true"  >申请进度</el-button>
       <el-dialog title="门店注册" :visible.sync="dialogFormVisible">
         <el-form :model="form">
           <el-form-item label="门店名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
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
           <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary"  @click="add" >确 定</el-button>
           </div>
       </el-dialog>
       <!-- <el-dialog
         title="申请进度"
         :visible.sync="dialogVisible"
         :before-close="handleClose">
        <el-steps :space="400" :active="0" finish-status="success">
          <el-step title="审核中"></el-step>
          <el-step title="已审核"></el-step>
        </el-steps>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
         <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog> -->
    </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("lwj");
export default {
  data() {
    return {
      dialogFormVisible: false,
      dialogVisible: false,
      form: {
        name: "",
        businessNum: "",
        legalPerson: "",
        tel: "",
        feature: "",
        vipLeval: "",
        rate: "",
        assistantname: "",
        assistantlevel: "",
        assistantphone: ""
      },
      formLabelWidth: "120px"
      //   disabled:true
    };
  },
  methods: {
    add() {
      let arr = [];
      arr.push({
        assistantname: this.form.assistantname,
        assistantlevel: this.form.assistantlevel,
        assistantphone: this.form.assistantphone
      });
      axios({
        method: "post",
        url: "/applys",
        data: {
          name: this.form.name,
          businessNum: this.form.businessNum,
          tel: this.form.tel,
          legalPerson: this.form.legalPerson,
          feature: this.form.feature,
          vipLeval: this.form.vipLeval,
          rate: this.form.rate,
          arr
        }
      }).then(res => {
        console.log(res);
        this.dialogFormVisible = false;
      });
      // this.disabled = false;
    }
  }
};
</script>

<style>
</style>