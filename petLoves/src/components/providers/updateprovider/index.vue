<template>
  <div>
    <el-dialog title="修改学生" :visible.sync="visible">
      <el-form >
          <el-form-item label="供应商名称" :label-width="formLabelWidth">
          <el-input   v-model="provider.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="营业执照号" :label-width="formLabelWidth">
          <el-input v-model="provider.number" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="法人代表" :label-width="formLabelWidth">
          <el-input v-model="provider.person" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="供应商号码" :label-width="formLabelWidth">
          <el-input v-model="provider.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="供应商地址" :label-width="formLabelWidth">
          <el-input v-model="provider.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="setVisible(false)">取 消</el-button>
        <el-button type="primary" @click="updateBtn" >修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState ,mapMutations} = createNamespacedHelpers("yj");
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        number: "",
        name: "",
        address: "",
        person: "",
        phone: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  computed:{
      ...mapState(["visible"]),
      ...mapState(["provider"]),
      ...mapState(['upVisble']),
      
      
  },
  methods: {
    ...mapActions(["setProviders"]),
    ...mapMutations(['setVisible']),
    updateBtn() {
        console.log(this.provider,'sdasdasd')
 let id = this.provider._id
 console.log(id,"修改按钮ID")

                    axios({
                        method: "put",
                        url: "/providers/" + id,
                        data: {
                            name: this.provider.name,
                            phone: this.provider.phone,
                            person: this.provider.person,
                            address: this.provider.address,
                            number: this.provider.number
                            
                        }

                    }).then(() => {
                     this.setVisible(false)
                          this.setProviders();
                        
                    })
                }
    
  }
};
</script>


