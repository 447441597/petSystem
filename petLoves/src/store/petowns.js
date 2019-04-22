import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        pet: []
    },
    mutations: {
        setState(state, pet) {
            state.pet = pet
        }
    },
    actions: {
        setPet({ commit }, payload = {}) {
            let page = payload.page || 1;
            let rows = payload.rows || 10;
            let type = payload.type || '';
            let value = payload.value || '';
            axios({
                method: "get",
                url: "/petOwns",
                params: {
                    page, rows, type, value
                }
            }).then(res => {
                commit("setState", res.data.rows)
            });
        }
    }
}