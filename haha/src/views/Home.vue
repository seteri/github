<script>
import { useStore} from 'vuex'
export default{
  setup(){
    const store = useStore()
    const auu = () =>{
      store.dispatch("gurami")
      console.log(store.state.test.state.posterUrl)
    }
 

    return{
      auu
      
    }
  }
}

</script>

<template>
  <div class="home-container">
      <h1 class="home-title">WELCOME TO FMOVIES</h1>
      <p class="home-text">FMovies is one of the best site to watch movies online for free. We give full access to a database of over 20000 movies and 5000 Tv series in high quality for free streaming, with no registration required </p>
      <router-link class="home-button" @click = "auu"  to="/movies">Start Watching</router-link> 
     </div>
 </template>
  
  
  <style scoped>

      .home-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    
    .home-title {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    
    .home-text {
      font-size: 18px;
      text-align: center;
      margin-bottom: 40px;
    }
    
    .home-button {
      padding: 20px 40px;
      background-color: rgb(29, 24, 24);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

  </style>
  