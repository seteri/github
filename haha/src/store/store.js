import {createStore} from 'vuex'
import axios from 'axios';

export default createStore({

    state:{
      data: null,
      searchedMovies: [],
      param: ""
       
    },

    mutations:{
      SET_DATA (state, data) {
        
        state.data = data;
      }

    },

    actions:{ 
      fetchData ({ commit },param) {
       
        const options = {
          method: 'GET',
          url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
          params: {q: param},
          headers: {
            'X-RapidAPI-Key': 'bf83916b1fmshe89733513789e45p161e45jsn9cfc088994e6',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
          }
        };
        
        axios.request(options)
          .then(response => {
            commit('SET_DATA', response.data);
          })

      },

       
        
        
    },


    
})
