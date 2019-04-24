<template>
    <div>
         <el-dialog
        title="修改"
        :visible.sync="dialogVisible"
        width="30%"
        center>
       <span>
         <el-form  status-icon label-width="100px"  class="demo-ruleForm">
                <el-form-item label="手机号" prop="phone">
                <el-input type="text" v-model="person.phone" autocomplete="off"></el-input>
               </el-form-item>
               <el-form-item label="密码" prop="pwd">
              <el-input type="text" v-model="person.pwd" autocomplete="off" ></el-input>
              </el-form-item>
         </el-form>
       </span>
       <span slot="footer" class="dialog-footer">
       <el-button @click="setVisible1">取 消</el-button>
      <el-button type="primary" @click="updatepersons">确 定</el-button>
     </span>
</el-dialog>
    </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("users");
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["person"]),
    ...mapState(["dialogVisible"])
  },
  methods: {
    ...mapActions(["setPersons"]),
    ...mapActions(["setVisible1"]),
   updatepersons() {
      let id = this.person._id;
      console.log(id);
          axios({
        method: "put",
        url: "/users/" + id,
        data: {
          phone: this.person.phone,
          pwd: this.person.pwd,
        }
      }).then(res => {
        this.setPersons();
        this.setVisible1();
      });
      }
   }
};
</script>

<style>
</style>
