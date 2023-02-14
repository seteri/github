import axios from 'axios'

const state = {
  currencies: [],
  api: import.meta.VITE_API_KEY
}

const getters = {
  currencies: state => state.currencies,
}

const actions = {
  async fetchData({ commit }) {
    const response = await axios.get("https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json")
    commit('SET_CURRENCIES', response.data)

  }
}

const mutations = {
  SET_CURRENCIES(state, currencies) {
    state.currencies = currencies
    console.log(state.api)
  },

}

export default {
  state,
  getters,
  actions,
  mutations
}
