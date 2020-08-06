import stocks from '../../data/stocks'

export default {
  state: {
    stocks: []
  },
  mutations: {
    setStock(state, stocks) {
      state.stocks = stocks
    },
    ramdomizeStock(state) {
      state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.45))
      }); 
    }
  },
  actions: {
    buyStock({ commit }, order) {
      commit('buyStocks', order)
    },
    initStock({ commit }) {
      commit('setStock', stocks )
    },
    ramdomizeStock({ commit }) {
      commit('ramdomizeStock')
    }
  },
  getters: {
    stocks(state) {
      return state.stocks
    }
  }
}