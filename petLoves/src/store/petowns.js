import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        pet: [],
        Identity: false,
        pets: [],
        vip:false,
        vipcard:[],
        total:'',
        i:""
    },
    mutations: {
        setState(state, pet) { 
            state.pet = pet;
        },
        setIdent(state) {
            state.Identity = !(state.Identity);
        },
        setVip(state){
            state.vip = !(state.vip);
        },
        setPets(state, pets) {
            state.pets = pets;
        },
        vips(state,arr){
            state.vipcard = arr;
        },
        seti(state,i){
            state.i = i;
        },
        settotal(state,total){
            state.total = total;
        }
    },
    actions: {
        setPet({ commit }, payload = {}) {
            let page = payload.page || 1;
            let rows = payload.rows || 5;
            let type = payload.type || '';
            let value = payload.value || '';
            axios({
                method: "get",
                url: "/petOwns",
                params: {
                    page, rows, type, value
                }
            }).then(res => {
                commit('settotal',res.data.total);
                commit("setState", res.data);
            });
        }
    }
}