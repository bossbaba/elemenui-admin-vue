import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import state from './state';
import actions from './actions';
import modules from './modules';
Vue.use(Vuex)

// vuex 监视策略 自定义vuex插件
const setStrogeFun = store => {
  window.console.log(store)
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    window.localStorage.setItem('state', JSON.stringify(state))
  })
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  plugins: [setStrogeFun],
})