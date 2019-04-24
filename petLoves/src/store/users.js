import axios from 'axios'
import Vue from "vue";
import Vuex from "vuex";
export default {
    namespaced: true,
    state: {
        persons: [],
        person:{},
        dialogVisible:false,
    },
    mutations: {
        setPerson(state, person) {
            state.persons = person
            console.log("state",typeof( state.persons[0].privilege),"hhhhhhh", typeof( person[0].privilege))
        },
        person(state,person){
            state.person = person
        },
        setVisible(state,Visible){
            state.dialogVisible = Visible  
        },
        setVisible1(state,Visible){
            state.dialogVisible = Visible  
        }
    },
    actions: {
        setPersons({commit}, payload = {}, ) {
            let page = payload.page || 1;
            let rows = payload.rows || 10;
            let type = payload.type || "";
            let value = payload.value || "";
            console.log(type,value)
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
                console.log(res.data.rows)
                commit("setPerson", res.data.rows)
                // commit("setPagination",res.data)
            })
        },

        updatePersons({commit}, id) {
            console.log(id,'id')
            commit("setVisible", true)
            axios({
                method: "get",
                url: "/users/" + id,
            }).then((res) => {
                console.log(res.data,'22')
                commit("person", res.data)
               
            })
        },

        setVisible1({commit}){
            commit("setVisible1",false)
        }
    }
}