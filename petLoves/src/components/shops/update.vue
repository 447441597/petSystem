<template>
    <div>
        <el-dialog title="门店审核" :visible.sync="visible2" :show-close="false">
         <el-form>
           <el-form-item label="门店名称" :label-width="formLabelWidth">
              <el-input v-model="shop.storeName" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="营业执照号码" :label-width="formLabelWidth">
              <el-input v-model="shop.businessNum" autocomplete="off"></el-input>
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
              <el-input v-model="shop.address" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="法人" :label-width="formLabelWidth">
              <el-input v-model="shop.legalPerson" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth">
              <el-input v-model="shop.tel" autocomplete="off"></el-input>
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
              <el-input v-model="shop.feature" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="VIP等级" :label-width="formLabelWidth">
              <el-input v-model="shop.vipLeval" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="佣金比例" :label-width="formLabelWidth">
              <el-input v-model="shop.rate" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="店员姓名" :label-width="formLabelWidth">
              <el-input v-model="shop.assistantname" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="店员职级" :label-width="formLabelWidth">
              <el-input v-model="shop.assistantlevel" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="店员电话" :label-width="formLabelWidth">
              <el-input v-model="shop.assistantphone" autocomplete="off"></el-input>
           </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
        <el-button @click="setVisible2(false)">取 消</el-button>
        <el-button type="primary" @click="update">确定</el-button>
      </div>
        </el-dialog>
    </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "lwj"
);
export default {
  data(){
    return{
      value:"",
       formLabelWidth: "120px"
    }
  },
  computed: {
    ...mapState(["shop", "visible2"]),
     storeName: {
      set(storeName) {
        this.setShop({
          ...this.shop,
          storeName
        });
      },
      get() {
        return this.shop.storeName;
      }
    },
    businessNum: {
      set(businessNum) {
        this.setShop({
          ...this.shop,
          businessNum
        });
      },
      get() {
        return this.shop.businessNum;
      }
    },
    address: {
      set(address) {
        this.setShop({
          ...this.shop,
          address
        });
      },
      get() {
        return this.shop.address;
      }
    },
    legalPerson: {
      set(legalPerson) {
        this.setShop({
          ...this.shop,
          legalPerson
        });
      },
      get() {
        return this.shop.address;
      }
    },
    tel: {
      set(tel) {
        this.setShop({
          ...this.shop,
          tel
        });
      },
      get() {
        return this.shop.tel;
      }
    },
    feature: {
      set(feature) {
        this.setShop({
          ...this.shop,
          feature
        });
      },
      get() {
        return this.shop.feature;
      }
    },
    vipLeval: {
      set(vipLeval) {
        this.setShop({
          ...this.shop,
          vipLeval
        });
      },
      get() {
        return this.shop.vipLeval;
      }
    },
    rate: {
      set(rate) {
        this.setShop({
          ...this.shop,
          rate
        });
      },
      get() {
        return this.shop.rate;
      }
    }
  },
  methods: {
    ...mapActions(["setShop", "setshops","getok"]),
    ...mapMutations(["setVisible2"]),
    update() {
      let id = this.shop._id;
      console.log(id,"123123")
      // console.log(this.form.name, this.form.age, this.form.gender);
      axios({
        method: "put",
        url: "/shops/" + id,
        data: this.shop
      }).then(res => {
        console.log(res);
        this.setVisible2(false);
        this.getok();
      });
      this.$message({
        type: "success",
        message: "修改成功!"
      });
    }
  }
};
</script>

<style>

</style>