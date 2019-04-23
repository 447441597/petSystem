<template>
    <div>
         <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
     :show-close="false">
      <el-table
      :data="zhiyuan[0]"
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
     props: ["zhiyuan"],
computed: {
    ...mapState(["shop", "dialogVisible"])
  },
  methods: {
    ...mapActions(["setShop", "setshops"]),
    ...mapMutations(["setdialogVisible"]),
    ok(){
        this.setdialogVisible(false)
        console.log(this.zhiyuan[0])
    },
    close(){
        this.setdialogVisible(false)
    }
  }
}
</script>

<style>

</style>
