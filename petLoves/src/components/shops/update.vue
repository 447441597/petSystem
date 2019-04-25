<template>
    <div>
        <el-dialog title="门店修改" :visible.sync="visible2" :show-close="false">
         <el-form>
            <el-form-item label="VIP等级" :label-width="formLabelWidth">
              <el-input v-model="shop.vipLeval" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="佣金比例" :label-width="formLabelWidth">
              <el-input v-model="shop.rate" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="店员信息" :label-width="formLabelWidth">
               <el-button type="primary" size="mini" @click="updateAssis" >修改店员</el-button>
           </el-form-item>
           <el-dialog
            title="修改店员"
            :visible.sync="dialogVisible"
            width="30%"
           :show-close="false"  append-to-body>
            <el-form-item label="店员姓名" :label-width="formLabelWidth">
            <el-input v-model="shop.assistant[0].assistantname" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="店员职级" :label-width="formLabelWidth">
              <el-input v-model="shop.assistant[0].assistantlevel" autocomplete="off"></el-input>
           </el-form-item>
            <el-form-item label="店员电话" :label-width="formLabelWidth">
              <el-input v-model="shop.assistant[0].assistantphone" autocomplete="off"></el-input>
           </el-form-item>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
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
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("lwj");
export default {
  data() {
    return {
      src: "http://localhost:3005/images/",
      dialogVisible: false,
      value: "",
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapState(["shop", "visible2"]),
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
    ...mapActions(["setShop", "setshops", "getok"]),
    ...mapMutations(["setVisible2"]),
    update() {
      let id = this.shop._id;
      axios({
        method: "put",
        url: "/shops/" + id,
        data: this.shop
      }).then(res => {
        this.setVisible2(false);
        this.getok();
      });
      this.$message({
        type: "success",
        message: "修改成功!"
      });
    },
    updateAssis() {
      this.dialogVisible = true;
    }
  }
};
</script>

<style>
</style>