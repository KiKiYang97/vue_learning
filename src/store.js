import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        todos: [{
            text:'kiki',
        },
            {
                text:'yang'
            }]
    },
    mutations: {
        addTodo (state,msg) {
            state.todos.unshift({text:msg})
        }
    }
})