<template>
    <div>
        <el-row>
            <el-button type="primary" @click="updatadialog = true">修改商品</el-button>
        </el-row>
         <el-dialog title="修改商品" :visible.sync="updatadialog " width="35%">
      <el-form :model="form">
        <el-form-item label="商品名称：" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
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
          
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updatadialog  = false">取 消</el-button>
        <el-button type="primary" @click="updatadialog  = false;add()" >确 定</el-button>
      </div>
    </el-dialog>
    </div>
</template>

<script>
export default {
data(){
    return{
        updatadialog:false,
         form: {
        name: "",
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
    }
}
}
</script>

<style>

</style>
