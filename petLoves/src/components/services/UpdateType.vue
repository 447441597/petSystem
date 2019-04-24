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
        <el-button @click="cancel">取 消</el-button>
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
      //   dialogFormVisible: false,
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapState(["dialogFormVisible","serverType"]),
    typeName: {
      set(typeName) {
        return this.setService({
          ...this.serverType,
          typeName: typeName
        });
      },
      get() {
        return this.serverType.typeName;
      }
    }
  },
  methods: {
    ...mapActions(["setVisible","getTypes"]),
    cancel() {
      this.setVisible(false);
    },
    addServeType() {
      // this.setVisible(false);
      console.log("这是要修改的服务", this.serverType);
      axios({
        method: "put",
        url: "/serverTypes/" + this.serverType._id,
        data: {
          typePrice: this.serverType.typePrice,
          typeName: this.serverType.typeName,
        }
      }).then(res => {
          console.log(55)
        console.log("修改后的服务为", res.data);
        this.getTypes();
        this.setVisible(false);
      });
    }
  }
};
</script>

<style>
</style>
