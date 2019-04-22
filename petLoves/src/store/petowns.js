import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: {
        show() {
            axios({
                method: "get",
                url: "",
                params: {
                    page, rows
                }
            }).then(res => {
                state.students = res.data.rows;
                state.pagination = res.data
            });
        }
    },
    actions: {

    }
})