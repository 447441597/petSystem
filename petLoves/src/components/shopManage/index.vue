<template>
  <div style="height:100%">
    <el-container style="height:100%">
      <el-header style="background:#0099cc;height:100px;line-height:100px;margin:0">
        <el-row>
          <el-col :span="8">
            <h1 style="color:white;margin:0">门店管理</h1>
          </el-col>
           <el-col :span="12">
            <div style="height:10px">
            </div>
          </el-col>
          <el-col :span="2">
            <div>
              <span style="color:white">{{user}}</span>
            </div>
          </el-col>
          <!-- <el-col :span="2">
            <el-button type="info" icon="el-icon-back" circle size="mini" @click="logout"></el-button>
          </el-col> -->
        </el-row>
      </el-header>
      <el-container style="height:100%">
        <el-aside width="200px" height="100%">
          <el-row class="tac" style="height:100%">
            <el-col :span="24" style="height:100%">
              <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                style="height:100%"
               
              >
                <el-menu-item index="/shopManage/apply">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <router-link to="/shopManage/apply">申请</router-link>
                  </template>
                </el-menu-item>
                <el-menu-item index="/shopManage/goods">
                  <i class="el-icon-menu"></i>
                  <router-link to="/shopManage/goods">商品管理</router-link>
                </el-menu-item>
                <el-menu-item index="/shopManage/services">
                  <i class="el-icon-menu"></i>
                  <router-link to="/shopManage/services">服务管理</router-link>
                </el-menu-item>
                 <el-menu-item index="/shopManage/orders">
                  <i class="el-icon-menu"></i>

                  <!-- ///// -->
                  <router-link to="/shopManage/orders">订单管理</router-link>
                </el-menu-item>
                 <el-menu-item index="/shopManage/shopAddup">
                  <i class="el-icon-setting"></i>
                  <router-link to="/shopManage/shopAddup">统计</router-link>
                </el-menu-item>
                
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    // axios({
    //   method: "get",
    //   url: "/getSession"
    // }).then(res => {
    //   console.log(res);
    //   if (res.data) {
    //     this.user = res.data;
    //   } else {
    //     this.$router.push({ path: "/login" });
    //   }
    // });
    this.defaultIndex = this.$router.history.current.path;
  },
  data() {
    return {
      user: "",
      defaultIndex: ""
    };
  },
  methods: {
    logout() {
      axios({
        method: "get",
        url: "/removeSession"
      }).then(res => {
        this.$router.push({ path: "/login" });
      });
    },

    select() {
      axios({
        method: "get",
        url: "/getSession"
      }).then(res => {
        console.log(res);
        if (res.data) {
        } else {
          this.$router.push({ path: "/login" });
        }
      });
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
  color: white;
  width: 100%;
  height: 100%;
  display:inline-block
}

</style>
