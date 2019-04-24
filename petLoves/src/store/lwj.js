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
    active: 1,
    visible: false,
    visible2: false,
    dialogVisible: false,
    search: {
      type: "",
      value: ""
    },
    examine: [],
    zhiyuan: [],
    status: "",
    userId:''
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
      console.log(pagiNation, "1111111111111111onpagiNationpagiNation");
      // state.pagiNation = pagiNation;
      state.pagiNation = {
        total: pagiNation.total,
        eachpage: pagiNation.eachpage,
        curpage: pagiNation.curpage
      };
      // state.pagiNation.total = pagiNation.total,
      // state.pagiNation.eachpage = pagiNation.eachpage
      // state.pagiNation.curpage = pagiNation.curpage
    },
    setActive(state) {
      state.active++;
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
    setdialogVisible(state, zhiyuan) {
      state.dialogVisible = !state.dialogVisible;
      state.zhiyuan = zhiyuan;
      // console.log(state.zhiyuan);
    },
    setTemp(state, data) {
      // console.log(data,'修改22222222222222')
      state.status = data;
    },
    setUserId(state,data){
      state.userId = data
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
        // console.log(res, "哈哈哈哈哈");
        commit("getok", res.data.rows);
        commit("setpagiNation", res.data);
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
        console.log(res.data, "ok");
        commit("getok", res.data.rows);
        commit("setpagiNation", res.data);
        commit("setSearch", { type, value });
      });
    },
    getTemp({ commit }) {
      axios({
        method: "get",
        url: "/getSession"
      }).then(res => {
        console.log(res.data,'轉臺');
        let id = res.data._id;
        commit("setUserId",id);
        axios({
          method: "get",
          url: "/users/" + id
        }).then(data => {
          // console.log(data, "55555555553333333");
          if (data.data.shopsId == "") {
            commit("setTemp", 0);
          } else {
            commit("setTemp", 1);
          }
        });
        // commit("setTemp",res)
      });
    }
  }
};
