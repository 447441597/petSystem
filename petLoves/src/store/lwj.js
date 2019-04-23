import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
export default {
  namespaced: true,
  state: {
    shops: [],
    shop: {},
    pagiNation: {},
    active: 0,
    visible: false,
    visible2: false,
    dialogVisible: false,
    search: {
      type: "",
      value: ""
    },
    examine: []
  },
  mutations: {
    setshops(state, shops) {
      state.shops = shops;
      //   console.log(state,"147")
    },
    getok(state, shops) {
      state.shops = shops;
    },
    setpagiNation(state, pagiNation) {
      state.pagiNation = pagiNation;
    },
    setActive(state, active) {
      state.active = active;
    },
    setShop(state, shop) {
      state.shop = shop;
    },
    // 审核
    setVisible(state, visible) {
      state.visible = visible;
    },

    // 修改
    setVisible2(state, visible2) {
      state.visible2 = visible2;
    },

    setexamine(state, examine) {
      state.examine = examine;
    },
    setSearch(state, search) {
      state.search = search;
    },
    setdialogVisible(state, dialogVisible) {
      state.dialogVisible = dialogVisible;
    }
  },
  actions: {
    setshops({ commit, state }, payload = {}) {
      let page = payload.page || 1;
      let rows = payload.rows || 5;
      let type = state.search.type || "";
      let value = state.search.value || "";
      axios({
        method: "get",
        url: "/shops",
        params: { page, rows, type, value }
      }).then(res => {
        console.log(res,"全部");
        commit("setshops", res.data.rows);
        commit("setpagiNation", res.data);
        commit("setSearch", { type, value });
      });
    },
    setShop({ commit }, id) {
      axios({
        method: "get",
        url: "/shops/" + id
      }).then(res => {
        // console.log(res,"shuju")
        commit("setShop", res.data);
        commit("setVisible2", true);
      });
    },
    getno({ commit, state }, payload = {}) {
      let page = payload.page || 1;
      let rows = payload.rows || 5;
      let type = state.search.type || "";
      let value = state.search.value || "";
      axios({
        method: "get",
        url: "/shops/no",
        params: { page, rows, type, value }
      }).then(res => {
        console.log(res, "罗文杰");
        commit("getok", res.data);
        // commit("setpagiNation", res.data);
        // commit("setSearch", { type, value });
      });
    },
    getok({ commit, state }, payload = {}) {
      let page = payload.page || 1;
      let rows = payload.rows || 5;
      let type = state.search.type || "";
      let value = state.search.value || "";
      axios({
        method: "get",
        url: "/shops/ok",
        params: { page, rows, type, value }
      }).then(res => {
        console.log(res, "罗文杰hh");
        commit("getok", res.data);
        commit("setpagiNation", res.data);
        commit("setSearch", { type, value });
      });
    }
  }
};
