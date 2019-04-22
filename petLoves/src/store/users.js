
import axios from 'axios'
import Vue from "vue";
import Vuex from "vuex";
export default {
    namespaced:true,
    state: {
        persons: [],
    },
    mutations: {
        setPerson(state, person) {
            state.persons = person
            console.log("state",state)
        },
    },
    actions: {
        setPersons({
            commit
        }, payload = {}, ) {
            let page = payload.page || 1;
            let rows = payload.rows || 10;
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
                console.log(res.data)
                commit("setPerson", res.data.rows)
                // commit("setPagination",res.data)
            })
        },
    }
}