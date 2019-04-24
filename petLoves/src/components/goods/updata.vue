<template>
  <div>
    <el-dialog title="修改商品" :visible.sync="updatadialog " width="35%">
      <el-form>
        <el-form-item label="商品名称：" :label-width="formLabelWidth">
          <el-input v-model="updt.goodsName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品类型：" :label-width="formLabelWidth">
          <el-input v-model="updt.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="材质或制作方法：" :label-width="formLabelWidth">
          <el-input v-model="updt.material" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="适用规格：" :label-width="formLabelWidth">
          <el-input v-model="updt.applyGuige" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="专属规格：" :label-width="formLabelWidth">
          <el-input v-model="updt.exGuige" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="包装规格：" :label-width="formLabelWidth">
          <el-input v-model="updt.Packing" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="口味：" :label-width="formLabelWidth">
          <el-input v-model="updt.taste" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="特殊功用：" :label-width="formLabelWidth">
          <el-input v-model="updt.specialFunc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="产地：" :label-width="formLabelWidth">
          <el-input v-model="updt.addr" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="生产日期：" :label-width="formLabelWidth">
          <el-input v-model="updt.productionDate" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="保质期：" :label-width="formLabelWidth">
          <el-input v-model="updt.keepDate" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="供应商：" :label-width="formLabelWidth">
          <el-input v-model="updt.provider" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="特色说明：" :label-width="formLabelWidth">
          <el-input v-model="updt.features" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格：" :label-width="formLabelWidth">
          <el-input v-model="updt.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="库存：" :label-width="formLabelWidth">
          <el-input v-model="updt.number" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片：" :label-width="formLabelWidth">
          <el-upload v-model="updt.images" action="goods/upload" list-type="picture-card"
          :on-success='handleSuccess'
          >
           <!-- <img width="147" height="147" :src="src+updt.images[0]" alt=""> -->
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-upload v-model="updt.images" action="goods/upload" list-type="picture-card"
          :on-success='handleSuccess'
           :disabled='true'
          >
           <img width="147" height="147" :src="src+updt.images[0]" alt="">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
               <el-form-item label="小图：" :label-width="formLabelWidth">
          <el-upload v-model="updt.miniimg" action="goods/upload" list-type="picture-card"
          :on-success='handleSuccess1'
          >
           <!-- <img width="147" height="147" :src="src+updt.miniimg[0]" alt=""> -->
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-upload v-model="updt.miniimg" action="goods/upload" list-type="picture-card"
          :on-success='handleSuccess1'
          :disabled='true'
          >
           <img width="147" height="147" :src="src+updt.miniimg[0]" alt="">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="setVisible1">取 消</el-button>
        <el-button type="primary" @click="add()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("goods");
export default {
  data() {
    return {
      src:'http://localhost:3005/images/',
      images:[],
      miniimg:[],
      formLabelWidth: "140px"
    };
  },
  // activated () {
  //    console.log("hhhhhhhhh",this.updt)
  // },
  computed: {
    ...mapState(["updt"]),
    ...mapState(["updatadialog"])
  },
  methods: {
    ...mapActions(["getshow"]),
    ...mapActions(["setVisible1"]),
    add() {
      let id = this.updt._id;
      console.log(this.updt);
      axios({
        method: "put",
        url: "/goods/" + id,
        data: this.updt
      }).then(res => {
        this.getshow();
        this.setVisible1();
      });
    },
     handleSuccess(response,file,fileList){
        console.log(response,'上传的图片1')
        this.images.push(response)
        this.updt.images=this.images
        // console.log(this.img,'上传的图片列表')
        //  console.log(this.form,'上传的图片')
    },
    handleSuccess1(response,file,fileList){
        console.log(response,'上传的图片2')
        this.miniimg.push(response)
        this.updt.miniimg=this.miniimg
        // console.log(this.img,'上传的图片列表')
        //  console.log(this.form,'上传的图片')
    },
  }
};
</script>

<style>
</style>
