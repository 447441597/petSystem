<template>
<div>
<el-dialog title="宠物详细信息" :visible.sync="Identity" width="30%" :before-close="handleClose">
  <span>宠物详细信息</span>
  <div>哈哈哈哈哈哈</div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialog">关闭</el-button>
  </span>
</el-dialog>
</div>
    
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState,mapMutations } = createNamespacedHelpers("petowns");
export default {
  computed: {
    ...mapState(["Identity"])
  },
  data() {
    return {

    };
  },
  methods: {
    ...mapMutations(["setIdent"]),
    dialog(){
        this.setIdent();
    }
  }
};
</script>

<style>
</style>
