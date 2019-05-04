<template>
      <div style="margin-top:100px">
          <el-steps :space="600" :active="num" align-center>
          <el-step title="正在审核中"></el-step>
          <el-step title="已审核"></el-step>
         </el-steps>  
        <div style="width:90%;text-align:center">       
           <template style="width:100%;text-align:center" v-if="num==1">
           <div style="margin-bottom:40px;margin-top:30px ">提交成功，正在审核你的店铺，请耐心等待</div>
           <el-button type="primary"    @click="back" size="mini" style="margin-bottom:20px">返回登录</el-button>
           </template>
           <template style="width:100%;text-align:center" v-else-if="num==2">
           <div style="margin-bottom:40px;margin-top:30px ">恭喜你，门店申请成功</div>
           <el-button type="primary" @click="go" size="mini" style="margin-bottom:20px">进入门店</el-button>
           </template>
           <template style="width:100%;text-align:center" v-else>
           <div style="margin-bottom:40px;margin-top:30px ">对不起，您申请的门店审核不通过</div>
            <el-button type="primary" @click="back" size="mini"  style="margin-bottom:20px">返回登录</el-button>
           </template>
        
        </div>
      </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("lwj");
// let assistant = [];
export default {
  data() {
    return {
      ID: "",
      location: {},
      shopid: "",
      dialogVisible: false,
      select: false,
      // temp: 0,
      num: 1,
      shopsinfo: {},
      select: false
    };
  },
  computed: {
    ...mapState(["active", "status", "userId"])
  },
  created() {
    // this.getTemp(),
    // console.log(this.userId,"12222222222222222")
    // axios({
    //   method: "get",
    //   url: "/getSession"
    // }).then(res => {
    //   console.log(res,"res")
    //   let id = res.data._id;
    //   axios({
    //     method: "get",
    //     url: "/users/" + id
    //   }).then(info => {
    //     console.log(info,"info")
    //     this.shopid = info.data.shopsId;
    //     axios({
    //       method: "get",
    //       url: "/shops/" + this.shopid
    //     }).then(data => {
    //       console.log(data.data, "-+222222222222222222222");
    //       // this.shopsinfo = data.data;
    //       if (data.data.active == 3) {
    //         this.num = 2;
    //       } else if (data.data == "") {
    //         this.num = 0;
    //       }
    //     });
    //   });
    // });
    // console.log(this.userId, "13222222222222222222222");
    axios({
      method: "get",
      url: "/users/" + this.userId
    }).then(res => {
      console.log(res, "++++++++++++++++++");
      for (let i = 0; i < res.data.length; i++) {
        this.shopid = res.data[i].shopsId;
      }
      console.log(this.shopid, "----------------------");
      axios({
        method: "get",
        url: "/shops/" + this.shopid
      }).then(info => {
        console.log(info, "...................");
        if (info.data.active == 3) {
          this.num = 2;
        } else if (info.data == "") {
          this.num = 0;
        }
      });
    });
  },
  methods: {
    back() {
      location = "../login";
    },
    go() {
      location = "../shopManage";
    }
  }
};
</script>

<style>
.footer {
  text-align: center;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
