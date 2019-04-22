import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        persons: [],
    },
    mutations: {
        setPersons(state, person) {
            state.person = person
        },
    },
    actions: {
        setPersons({
            commit
        }, payload = {}, ) {
            let page = payload.page || 1;
            let rows = payload.rows || 5;
            let type = payload.type || "";
            let value = payload.value || "";
            axios({
                method: "get",
                url: "/users",
                params: {
                    page,
                    rows,
                    type,
                    value
                }
            }).then((res) => {
                console.log(res.data)               commit("setPersons", res.data.rows)
                // commit("setPagination",res.data)
            })
        },
    }
})