import { createStore } from 'vuex'
import currencies from './modules/test/currencies'

export default createStore({
  modules: {
    currencies
  }
})
