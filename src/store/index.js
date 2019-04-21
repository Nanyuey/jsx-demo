import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const state = {
  test: ''
}
const mutations = {
  changeTest(state, content) {
    state.test = content
  }
}
const action = {}
export default new Vuex.Store({
  state,
  mutations,
  action
})
