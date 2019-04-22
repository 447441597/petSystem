import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    orders: [],
  },
  mutations: {
    setShopsOrders(state, data) {
      state.shopsOrders = data;
    },
    setServicesOrders(state, data) {
      state.servicesOrders = data;
    },
  },
  actions: {
    getOrders({ commit }, payload = {page:1,rows:4}) {
        // console.log('objectobjectobjectobject')
      let page = payload.page;
      let rows = payload.rows;
      axios({
        method: "get",
        url: "/orders",
        params: {
          page,
          rows
        }
      }).then(res => {
        console.log(res, "res");
        // commit('setShopsOrders',)

      });
    }
  }
};
