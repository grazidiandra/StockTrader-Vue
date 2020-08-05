import stocks from '../../data/stocks'

export default {
  state: {
    stocks: []
  },
  mutations: {
    setStock(state, stocks) {
      state.stocks = stocks
    }
  },
  actions: {
    buyStock({ commit }, order) {
      commit('buyStocks', order)
    },
    initStock({ commit }) {
      commit('setStock', stocks )
    }
  },
  getters: {
    stocks(state) {
      return state.stocks
    }
  }
}