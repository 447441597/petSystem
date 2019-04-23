import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)
export default {
  namespaced: true,
  state: {
    shops: [],
    shop:{},
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
    },
    setShop(state,shop){
      state.shop = shop
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
    setShop({ commit }, id) {
      axios({
        method: "get",
        url: "/shops/" + id
      }).then(res => {
        commit("setShop", res.data);
        commit("setActive",0);
      });
    }
  }
};




