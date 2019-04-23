import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)
export default {
  namespaced: true,
  state: {
    shops: [],
    pagiNation: {},
    active: 0,
    type:"",
    value:""
  },
  mutations: {
    setshops(state, shops) {
      state.shops = shops;
    //   console.log(state,"147")
    },
    setpagiNation(state, pagiNation) {
      state.pagiNation = pagiNation;
    },
    setActive(state, active) {
      state.active = active;
    }
  },
  actions: {
    setshops({ commit}, payload = {}) {
      let page = payload.page || 1;
      let rows = payload.rows || 5;
      let type = this.state.type || "";
      let value = this.state.value || "";
      axios({
        method: "get",
        url: "/shops",
        params: { page, rows,type,value }
      }).then(res => {
        // console.log(res);
        commit("setshops", res.data.rows);
        commit("setpagiNation", res.data);
      });
    },
    setActive({ commit }, id) {
      axios({
        method: "get",
        url: "/shops/" + id
      }).then(res => {
        commit("setActive",0);
      });
    }
  }
};




