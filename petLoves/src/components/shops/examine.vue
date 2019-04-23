<template>
    <div>
        <el-dialog title="门店审核" :visible.sync="visible" :show-close="false">
             <el-table
      :data="info"
      style="width: 100%">
      <el-table-column
        prop="storeName"
        label="门店名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="businessNum"
        label="营业执照号码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="legalPerson"
        label="法人">
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="ok">通过</el-button>
    <el-button type="primary" @click="no">未通过</el-button>
    </el-dialog>
    </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("lwj");
export default {
  props: ["info"],
  data() {
    return {
      value: "",
      formLabelWidth: "120px"
    };
  },
  created(){
    console.log(this.info,'拿到')
  },
  computed: {
    ...mapState(["shop", "visible"])
  },
  methods: {
    ...mapActions(["setShop", "setshops"]),
    ...mapMutations(["setVisible"]),
    ok(){
      this.setVisible(false);
      axios({
        
      })
    },
    no(){
      this.setVisible(false);
    }
  }
};
</script>

<style>
</style>