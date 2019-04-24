<template>
    <div>
         <el-dialog
      title="店员信息"
      :visible.sync="dialogVisible"
      width="30%"
     :show-close="false">
      <el-table
      :data="zhiyuan"
      style="width: 100%">
      <el-table-column
      label="职员姓名"
      prop="assistantname"
      width="120">
    </el-table-column>
    <el-table-column
      label="职员职级"
      prop="assistantlevel"
      width="120">
    </el-table-column>
    <el-table-column
      label="职员电话"
      prop="assistantphone"
      width="120">
    </el-table-column>
    </el-table>
      <span slot="footer" class="dialog-footer">
    <el-button @click="close">取 消</el-button>
    <el-button type="primary" @click="ok">确 定</el-button>
     </span>
   </el-dialog>
    </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("lwj");
export default {
computed: {
    ...mapState(["shop", "dialogVisible","zhiyuan"])
  },
  methods: {
    ...mapActions(["setShop", "setshops"]),
    ...mapMutations(["setdialogVisible"]),
    ok(){
        this.setdialogVisible()
        // console.log(this.zhiyuan)
    },
    close(){
        this.setdialogVisible()
    }
  }
}
</script>

<style>

</style>
