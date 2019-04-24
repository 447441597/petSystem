<template>
  <div>
    <el-button type="primary" @click="click">添加服务</el-button>

    <el-dialog title="添加服务品类" :visible.sync="dialogFormVisible">
      <el-form :model="serverType">
        <el-form-item label="品类" :label-width="formLabelWidth">
          <el-input v-model="serverType.typeName" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="serverType.typePrice" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addServeType">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import axios from "axios";
const { mapState, mapActions } = createNamespacedHelpers("serverType");
export default {
  data() {
    return {
      serverType: {
        typeName: "",
        typePrice: ""
      },
      dialogFormVisible: false
    };
  },
  computed: {
    ...mapState(["dialogFormVisible"])
  },
  methods: {
    ...mapActions(["getTypes"]),
    click() {
      this.dialogFormVisible = true;
    },
    addServeType() {
      this.dialogFormVisible = false;
      axios({
        method: "post",
        url: "/serverTypes",
        data: {
         typeName:this.serverType.typeName,
         typePrice:this.serverType.typePrice
        }
      }).then(res => {
        console.log(res);
        this.getTypes();
      });
    }
  }
};
</script>

<style>
</style>
