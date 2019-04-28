<template>
    <div>
        <el-dialog title="门店审核" :visible.sync="visible" :before-close="handleClose">
             <el-table
      :data="info"
      style="width: 100%">
      <el-table-column
        prop="storeName"
        label="门店名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="businessNum"
        label="营业执照号码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="legalPerson"
        label="法人">
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="ok">通过</el-button>
    <el-button type="primary" @click="no">未通过</el-button>
    </el-dialog>
    </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("lwj");
let arr = []
export default {
  props: ["info"],
  data() {
    return {
      value: "",
      formLabelWidth: "120px",
      shopId : ""
    };
  },
  created(){
  },
  computed: {
    ...mapState(["shop", "visible","userId"])
  },
  methods: {
    ...mapActions(["setShop", "setshops","getno"]),
    ...mapMutations(["setVisible","setActive"]),
    ok(){
      this.setVisible(false);
      let id = this.info[0]._id
      this.setActive();
      axios({
        method:"put",
        url:"/shops/change/"+id,
      }).then((res)=>{
        this.getno();
        axios({
        method:"get",
        url:"/users/"+this.userId,
        }).then((data)=>{
          for(let i =0;i<data.data.length;i++){
            this.shopId = data.data[i]._id
          }
          axios({
            method:"put",
            url:"/users/"+this.shopId,
            data:{
              status:1
            }
          })
        })
      })
    },
    no(){
      this.setVisible(false);
       let id = this.info[0]._id
       axios({
         method:"delete",
         url:"/shops/"+id,
       }).then((res)=>{
         this.getno();
        axios({
        method:"get",
        url:"/users/"+this.userId,
        }).then((data)=>{
          for(let i =0;i<data.data.length;i++){
            this.shopId = data.data[i]._id
          }
          axios({
            method:"put",
            url:"/users/"+this.shopId,
            data:{
              shopsId:""
            }
          }).then((info)=>{
            //  axios({

            //  })
          })
        })
       })
    },
    handleClose(done) {
        this.setVisible(false);
      }
  }
};
</script>

<style>
</style>