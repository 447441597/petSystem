import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    services: [],
    type: "",
    pagination: {
        eachpage:""
    },
    value: ""
  },
  mutations: {
    getServices(state, services) {
      
      state.services = services;
      console.log(state);
    },
    getPagination(state,pagination){
        state.pagination = pagination;
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
        commit("getPagination",res.data);
        commit("getServices", res.data.rows);
      });
    }
  }
};
