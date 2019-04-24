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
        <el-form-item label="库存：" :label-width="formLabelWidth">
          <el-input v-model="form.number" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片：" :label-width="formLabelWidth">
          <el-upload action="goods/upload" list-type="picture-card"
          :on-success='handleSuccess'
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
                <el-form-item label="小图：" :label-width="formLabelWidth">
          <el-upload action="goods/upload" list-type="picture-card"
          :on-success='handleSuccess1'
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
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("goods");
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogFormVisible: false,
      img: [],
      minimum:[],
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
        price: "",
        number:'',
        images:'',
        miniimg:''
      },
      formLabelWidth: "140px"
    };
  },
  methods: {
    ...mapActions(["getshow"]),
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleSuccess(response,file,fileList){
        // console.log(response,'上传的图片')
        this.img.push(response)
        this.form.images=this.img
        // console.log(this.img,'上传的图片列表')
        //  console.log(this.form,'上传的图片')
    },
    handleSuccess1(response,file,fileList){
        console.log(response,'上传的图片')
        this.minimum.push(response)
        this.form.miniimg=this.minimum
        // console.log(this.img,'上传的图片列表')
        //  console.log(this.form,'上传的图片')
    },
    add() {
      let adddata = this.form;
      let img = this.images
      axios({
        method: "post",
        url: "goods/add",
        data: this.form
      }).then(res => {
        console.log("添加成功");
        this.getshow();
      });
    }
  }
};
</script>

<style>
</style>
