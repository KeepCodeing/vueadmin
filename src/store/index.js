import Vue from 'vue'
import Vuex from 'vuex'
import menu_store from './menu'
import user_list_store from './user_list'
import power_list_store from './power_list'
import role_list_store from './role_list'

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
    power_list_store,
    role_list_store
  }
})
