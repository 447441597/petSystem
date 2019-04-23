<template>
  <div>
    <el-row>
      <el-button type="primary" @click="dialogFormVisible = true">添加商品</el-button>
    </el-row>
    <el-dialog title="增加商品" :visible.sync="dialogFormVisible" width="35%">
      <el-form :model="form">
        <el-form-item label="商品名称：" :label-width="formLabelWidth">
          <el-input v-model="form.goodsName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品类型：" :label-width="formLabelWidth">
          <el-input v-model="form.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="材质或制作方法：" :label-width="formLabelWidth">
          <el-input v-model="form.material" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="适用规格：" :label-width="formLabelWidth">
          <el-input v-model="form.applyGuige" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="专属规格：" :label-width="formLabelWidth">
          <el-input v-model="form.exGuige" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="包装规格：" :label-width="formLabelWidth">
          <el-input v-model="form.Packing" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="口味：" :label-width="formLabelWidth">
          <el-input v-model="form.taste" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="特殊功用：" :label-width="formLabelWidth">
          <el-input v-model="form.specialFunc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="产地：" :label-width="formLabelWidth">
          <el-input v-model="form.addr" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="生产日期：" :label-width="formLabelWidth">
          <el-input v-model="form.productionDate" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="保质期：" :label-width="formLabelWidth">
          <el-input v-model="form.keepDate" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="供应商：" :label-width="formLabelWidth">
          <el-input v-model="form.provider" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="特色说明：" :label-width="formLabelWidth">
          <el-input v-model="form.features" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格：" :label-width="formLabelWidth">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片：" :label-width="formLabelWidth">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-change="Add"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false;add()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogFormVisible: false,
      images: [],
      form: {
        goodsName: "",
        type: "",
        material: "",
        applyGuige: "",
        exGuige: "",
        Packing: "",
        taste: "",
        specialFunc: "",
        addr: "",
        keepDate: "",
        productionDate: "",
        provider: "",
        features: "",
        price: ""
      },
      formLabelWidth: "140px"
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    Add(file, fileList) {
      let arr = [];
      for (let i = 0; i < fileList.length; i++) {
        arr.push(fileList[i].goodsName);
      }
      console.log(arr, "上传的所有的图片");
      this.images = arr;
    },
    addimg(a) {
      console.log(a.file, "a.file");
    },
    add() {
      console.log(this.images, 4566);
      console.log(this.dialogImageUrl, "111");
      let adddata = this.form;
      axios({
        method: "post",
        url: "goods/add",
        data: adddata
      }).then(res => {
        console.log("添加成功");
      });
    }
  }
};
</script>

<style>
</style>
