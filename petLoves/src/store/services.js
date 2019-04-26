import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { stat } from "fs";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    services: [],
    service: {},
    type: "",
    times: [],
    serverDate:"",
    pagination: {
      eachpage: ""
    },
    value: "",
    serverTypes: [],
    levels: [],
    dialogFormVisible: false,
    timeVisible: false,
    shopsId:""
  },
  mutations: {
    getServices(state, services) {
      state.services = services;
      console.log(services,"关联类型后打印出来的");
    },
    getPagination(state, pagination) {
      state.pagination = pagination;
    },
    getTypes(state, serverTypes) {
      state.serverTypes = serverTypes;
    },
    getLevel(state, levels) {
      state.levels = levels;
    },
    getTime(state, times) {
      state.times = times;
    },
    setVisible(state, dialogFormVisible) {
      state.dialogFormVisible = dialogFormVisible;
    },
    setService(state, service) {
      state.service = service;
      console.log(service, "设置修改信息");
    },
    setTimeVisible(state, timeVisible) {
      console.log(timeVisible, "timeVisible");
      state.timeVisible = timeVisible;
    },
    setTimes(state, time) {
      state.times = time;
    },
    setSearch(state, search) {
      (state.type = search.type), (state.value = search.value);
      console.log(4444, search.type, search.value);
      // console.log(search.type,search.value,"type","value")
    },
    setPagesize(state, pageSize) {
      state.pagination.eachpage = pageSize;
    },
    setServerDate(state,serverDate){
      state.serverDate = serverDate;
    },
    setShopsId(state,shopsId){
      state.shopsId = shopsId;
    }
  },
  actions: {
    getServices({ commit }, getPage = {}) {
      let page = getPage.page || 1;
      let rows = getPage.eachpage || 5;
      let type = this.state.services.type || "";
      let value = this.state.services.value || "";
      console.log("type,value", type, value);
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
        for (let i = 0; i < res.data.rows.length; i++) {
          let str = " ";
          for (let j = 0; j < res.data.rows[i].time.length; j++) {
            str = str + res.data.rows[i].time[j].timeSlot;
          }
          res.data.rows[i].times = str;
        }
        console.log(res.data.rows);
        commit("getPagination", res.data);
        commit("getServices", res.data.rows);
      });
    },
    getTypes({ commit }, serverTypes) {
      console.log(22);
      axios({
        method: "get",
        url: "/serverTypes"
      }).then(res => {
        console.log(res.data, "types");
        commit("getTypes", res.data);
      });
    },
    getLevel({ commit }, shopId) {
      axios({
        method: "get",
        url: "/shops/" + shopId
      }).then(res => {
        console.log(res.data, "assistant");
        commit("getLevel", res.data.assistant);
      });
    },
    setVisible({ commit }, visible) {
      commit("setVisible", visible);
    },
    setService({ commit }, service) {
      console.log(service, "修改的服务");
      commit("setService", service);
    },
    setTimeVisible({ commit }, visible) {
      commit("setTimeVisible", visible);
    },
    getService({ commit }, serviceId) {
      axios({
        method: "get",
        url: "/services/" + serviceId
      }).then(res => {
        console.log(res.data, "要查看的时间");
        commit("getService", res.data);
        commit("setTimes", res.data.time);
      });
    },
    setSearch({ commit }, search = { type, value }) {
      console.log(search, "search");
      commit("setSearch", search);
    },
    setPagesize({ commit }, size) {
      commit("setPagesize", size);
    },
    setServerDate({commit},date){
      console.log(date,"date");
      commit("setServerDate",date);
    },
    getShopsId({commit},shopsId){
      axios({
        method:"get",
        url:"/getSession"
      }).then((res) => {
        console.log(res.data.shopsId,"session");
        commit("setShopsId",res.data.shopsId);
      })
      
    }
  }
};
