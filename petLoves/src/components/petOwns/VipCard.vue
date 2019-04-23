<template>
    <div>
        <el-dialog title="vip卡" :visible.sync="vip" width="30%"  :show-close="false">
            <el-table :data="vipcard" border style="width: 100%" row-key="_id">
              <el-table-column prop="name" label="店家" width="184">
              </el-table-column>
              <el-table-column prop="vipLeval" label="vip等级" width="184">
              </el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="viplog">关闭</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("petowns");
export default {
  computed: {
    ...mapState(["vip","vipcard"])
  },
  methods: {
    ...mapMutations(["setVip"]),
    viplog() {
      this.setVip();
    }
  }
};
</script>

<style>

</style>
