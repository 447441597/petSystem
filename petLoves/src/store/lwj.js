import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)
export default {
  namespaced: true,
  state: {
    info: [],
    pagiNation: {},
    active: 0,
    type:"",
    value:""
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
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
    setInfo({ commit}, payload = {}) {
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
        commit("setInfo", res.data.rows);
        commit("setpagiNation", res.data);
      });
    }
  }
};
