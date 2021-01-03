import Vue from 'vue'
import Vuex from 'vuex'
import menu_store from './menu'
import user_list_store from './user_list'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    menu_store,
    user_list_store,
  }
})
