<template>
<div>
<el-dialog title="宠物详细信息" :visible.sync="Identity" width="40%"  :show-close="false">
  <el-table :data="pets" border style="width: 100%" row-key="_id">
    <el-table-column prop="name" label="名字" width="85">
    </el-table-column>
    <el-table-column prop="type" label="种类" width="85">
    </el-table-column>
    <el-table-column prop="category" label="品种" width="85">
    </el-table-column>
    <el-table-column prop="color" label="颜色" width="85">
    </el-table-column>
    <el-table-column prop="birthDay" label="出生日期" width="85">
    </el-table-column>
    <el-table-column prop="character" label="性格" width="80">
    </el-table-column>
  </el-table>
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
    ...mapState(["Identity","pets"])
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
