<template>
  <div style="height:100%">
    <el-container style="height:100%">
      <el-header id="header" style="background:#0099cc;height:100px;line-height:100px;margin:0">
        <el-row>
          <el-col :span="4">
            <h1 style="color:white;margin:0">平台管理</h1>
             
          </el-col>
           <el-col :span="15">
            <div style="height:10px">
            </div>
          </el-col>
          <el-col :span="5">
            <div>
               <div id="top">
              <span style="margin-right:5px">欢迎用户:{{content}}</span>
              <el-button type="danger" @click="del">注销</el-button>
              </div>
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
                <el-menu-item index="/manage/users">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <router-link to="/manage/users">用户管理</router-link>
                  </template>
                </el-menu-item>
                <el-menu-item index="/manage/shops">
                  <i class="el-icon-menu"></i>
                  <router-link to="/manage/shops">门店管理</router-link>
                </el-menu-item>
                <el-menu-item index="/manage/petOwns">
                  <i class="el-icon-setting"></i>
                  <router-link to="/manage/petOwns">宠主管理</router-link>
                </el-menu-item>
                 <el-menu-item index="/manage/providers">
                  <i class="el-icon-setting"></i>
                  <router-link to="/manage/providers">供应商管理</router-link>
                </el-menu-item>
                 <el-menu-item index="/manage/addUp">
                  <i class="el-icon-setting"></i>
                  <router-link to="/manage/addUp">统计</router-link>
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
  data() {
    return {
      user: "",
      defaultIndex: "",
      content: "",

    };
  },
   created() {
    this.getsession();
  },
  methods: {
     getsession() {
      axios({
        method: "get",
        url: "/getSession"
      }).then(res => {
        console.log(res.data.phone);
        if (res.data.phone) {
          this.content = res.data.phone;
        } else {
          this.$router.push({ path: "/login" });
        }
      });
    },
    removesession() {
      axios({
        type: "get",
        url: "/removeSession"
      }).then(res => {
        console.log(res.data.phone);
        this.content = "";
        this.$router.push({ path: "/login" });
      });
    },
    del() {
      this.removesession();
    },
  }
};
</script>

<style>
a {
  text-decoration: none;
  color: white;
  width: 100%;
  height: 100%;
  display: inline-block;
}

</style>
