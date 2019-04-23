import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import { stat } from "fs";
Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    services: [],
    type: "",
    pagination: {
        eachpage:""
    },
    value: "",
    serverTypes:[],
    levels:[],
  
  },
  mutations: {
    getServices(state, services) {
      
      state.services = services;
      console.log(state);
    },
    getPagination(state,pagination){
        state.pagination = pagination;
    },
    getTypes(state,serverTypes){
        state.serverTypes = serverTypes;
    },
    getLevel(state,levels){
      state.levels = levels;
    },
    getTime(state,times){
      state.times = times
    }
  },
  actions: {
    getServices({ commit }, getPage = {}) {
      let page = getPage.page || 1;
      let rows = getPage.eachpage || 5;
      let type = this.state.type || "";
      let value = this.state.value || "";
      console.log("getPage", getPage);
      console.log("xixi", this.state);
      axios({
        method: "get",
        url: "/services",
        params: {
          page,
          rows,
          type,
          value
        }
      }).then(res => {
        console.log(res.data, "services");
        
        console.log(res.data.rows);
        for(let  i = 0; i<res.data.rows.length;i++){
          let str = " "
          for(let j = 0;j < res.data.rows[i].time.length;j++){
            str = str + res.data.rows[i].time[j].timeSlot;
          }
          res.data.rows[i].times = str
        }
        console.log(res.data.rows);
        commit("getPagination",res.data);
        commit("getServices", res.data.rows);
      });
    },
    getTypes({commit},serverTypes){
        console.log(22);
        axios({
            method:"get",
            url:"/serverTypes",

        }).then((res) => {
            console.log(res.data,"types")
            commit("getTypes",res.data);
        })
    },
    getLevel({commit},shopId){
      axios({
        method:"get",
        url:"/shops/"+shopId,
      }).then((res) => {
        console.log(res.data,"assistant");
        commit("getLevel",res.data.assistant);
      })
    }
  }
};
