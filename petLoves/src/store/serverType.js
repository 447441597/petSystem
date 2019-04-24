import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { stat } from "fs";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    type: "",   
    pagination: {
      eachpage: ""
    },
    value: "",
    serverTypes: [],
    serverType:{},
    dialogFormVisible: false,
  },
  mutations: {
    getTypes(state, serverTypes) {
      state.serverTypes = serverTypes;
    },
    getType(state,serverType){
        state.serverType = serverType;
    },
    setVisible(state, dialogFormVisible) {
        
      state.dialogFormVisible = dialogFormVisible;
    },
    setSearch(state, search) {
      (state.type = search.type), (state.value = search.value);
      console.log(4444, search.type, search.value);
      // console.log(search.type,search.value,"type","value")
    },
    setPagesize(state, pageSize) {
      state.pagination.eachpage = pageSize;
    }
  },
  actions: {
    
    getTypes({ commit }, getPage = {}) {
      console.log(33);
      let page = getPage.page || 1;
      let rows = getPage.eachpage || 5;
      let type = this.state.serverType.type || "";
      let value = this.state.serverType.value || "";
      axios({
        method: "get",
        url: "/serverTypes",
        params:{
            page,
            rows,
            type,
            value
        }
      }).then(res => {
        console.log(res.data, "serverTypes");
        commit("getPagination", res.data);
        commit("getTypes", res.data.rows);
      });
    },
    setVisible({ commit }, visible) {
      commit("setVisible", visible);
    },
    getType({ commit }, typeId) {
      axios({
        method: "get",
        url: "/serverTypes/" + typeId
      }).then(res => {
        commit("getType", res.data);        
      });
    },
    setSearch({ commit }, search = { type, value }) {
      console.log(search, "search");
      commit("setSearch", search);
    },
    setPagesize({ commit }, size) {
      commit("setPagesize", size);
    }
  }
};
