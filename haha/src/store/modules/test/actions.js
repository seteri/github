import axios from 'axios';

const actions = {
    async getCurrency({commit,getters}){
        const response = await axios.get(getters.getCurrencyData)
        commit("STORE_DATA_FROM_API",response.data)
    }
}

export default actions
