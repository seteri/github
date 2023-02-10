import {createStore} from 'vuex'
import axios from 'axios';

export default createStore({

    state:{
      gtxov: "",
      film: "",
      title: "",
      info: "",
      posterUrl: [

      ]
     
    },

    mutations:{
      poster(state,api){
        for(let a=0;a<6;a++){
          state.posterUrl.push({id:a, img: api.results[a].poster_path, post: api.results[a].title})
          
        }
        console.log(state.info)

      }
     
    },

    actions:{ 

      async getPoster({commit},movieName){
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${movieName}`);

          commit("poster",response.data)
        
     
      }
      
       
        
        
    },


    
})
