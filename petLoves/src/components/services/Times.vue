<template>
  <div>
   
    <el-dialog title="工作时间" :visible.sync="timeVisible">
      <el-table :data="times">
        <el-table-column property="timeSlot" label="工作时间" width="200"></el-table-column>
        <!-- <el-table-column property="name" label="姓名" width="200"></el-table-column> -->
        <!-- <el-table-column property="address" label="地址"></el-table-column> -->
      </el-table>
      <div slot="footer" class="dialog-footer">
    <el-button @click="cancel">关闭</el-button>
    
  </div>
    </el-dialog>
  </div>
</template>

<script>
const { mapState, mapActions } = createNamespacedHelpers("services");
import { createNamespacedHelpers } from "vuex";
import axios from "axios";
export default {
  created() {
    let shopId = "5cbc22270ca8acf604b3eaa6";
    console.log("haha");
    this.getTypes();
    this.getLevel(shopId);
    // console.log(this.timeVisible, "timeVisible");
  },
  data() {
    return {
      //   dialogFormVisible: false,
      formLabelWidth: "120px",
     
    };
  },
  computed: {
    ...mapState(["timeVisible", "service","times"]),
    visible:{
       
      set(timeVisible) {
        return this.setTimeVisible(false);
      },
      get() {
        console.log("upVisible", this.timeVisible);
        return this.timeVisible;
      }
    
    }
  },
  methods: {
    ...mapActions([
        "setTimeVisible",
      "setVisible",
      "getServices",
      "setSevices",
      "getLevel",
      "getTypes"
    ]),
  cancel(){
      this.setTimeVisible(false);
  }
  }
};
</script>

<style>
</style>
