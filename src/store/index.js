import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    USERINFO(state,userinfo) {
      state.user = userinfo
      sessionStorage.setItem('user',JSON.stringify(userinfo))
    }
  }
})