import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 0,
        login: "ALyulkov",
        password: "__DartPin13__",
        rights: 0
      }
    ]
  },
  getters: {
    USERS: state => {
      return state.users;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
