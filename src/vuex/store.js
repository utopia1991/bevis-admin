import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建 store 实例
export default new Vuex.Store({
  // 数据 state
  state: {
    count: 10
  },
  // 定义方法 mutations
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  // 执行方法 actions, 经常用到 ES2015 的 参数解构 来简化代码
  actions: {
    increment ({ commit }) {
      commit('increment')
    },
    decrement ({ commit }) {
      commit('decrement')
    }
  },
  getters: {
    getCount: state => {
      return state.count
    }
  }
})
