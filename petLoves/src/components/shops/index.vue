<template>
    <div>
       <el-button type="primary"  @click="dialogFormVisible = true">门店注册</el-button>
       <el-dialog title="增加门店" :visible.sync="dialogFormVisible">
         <el-form :model="form">
           <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="营业执照号码" :label-width="formLabelWidth">
              <el-input v-model="form.businessNum" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="法人" :label-width="formLabelWidth">
              <el-input v-model="form.legalPerson" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth">
              <el-input v-model="form.tel" autocomplete="off"></el-input>
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
            <el-form-item label="佣金比例" :label-width="formLabelWidth">
              <el-input v-model="form.rate" autocomplete="off"></el-input>
           </el-form-item>
        </el-form>
           <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary"   >确 定</el-button>
           </div>
       </el-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        gender: "",
        name: "",
        age: "",
        delivery: false
      },
      formLabelWidth: "120px"
    };
  }
};
</script>

<style>
</style>
