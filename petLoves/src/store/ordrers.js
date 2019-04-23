import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    orders: [],
    pagination: {
      total: "",
      eachpage: ""
    }
  },
  mutations: {
    setShopsOrders(state, data) {
      state.orders = data;
    },
    setPagination(state, data) {
      state.pagination = data;
      // console.log(state.pagination,'pagination')
    }
  },
  actions: {
    getOrders({ commit }, ordersType) {
      let page = 1;
      let rows = 5;
      ordersType = ordersType || 0;
      axios({
        method: "get",
        url: "/orders",
        params: {
          page,
          rows,
          ordersType
        }
      }).then(res => {
        commit("setPagination", {
          total: res.data.total,
          eachpage: res.data.eachpage
        });
        console.log(res.data, "请求会的数据");
        commit("setShopsOrders", res.data.rows);
      });
    },
    getOrdersStatus({ commit }, status) {
      let page = 1;
      let rows = 5;
      status = status || 0;
      axios({
        method: "get",
        url: "/orders/status",
        params: {
          page,
          rows,
          status
        }
      }).then(res => {
        // console.log(res.data.rows, "请求来的状态数据");
        commit("setShopsOrders", res.data.rows);
      });
    }
  }
};
