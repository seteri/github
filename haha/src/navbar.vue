
  <script>
  import { useStore} from 'vuex'
  import { ref  } from "vue";
  
  import  myModule from "./store/modules/test/index"
  export default {
    
  setup() {
  const { state } = myModule;
  let count = 0
  let image1 = ref("")
  let searchedWords = ref("")
  const store = useStore()
  const rameshveleba = () =>{
    store.dispatch("gurami")
  }
  const testi = () =>{
    
  
  }
  const search = () =>{
    store.dispatch("getPoster",searchedWords.value)
    console.log(store.state.test.state.posterUrl)
  
  }
  
  return{
    testi,
    state,
    rameshveleba,
    search,
    image1,
    count,
    searchedWords
    
  }
  
  }
  
  };
  </script>

<template>
    <div>
    <header>
      <a href="/"><h1 class="name">FMOVIES</h1></a>
      <input v-model="searchedWords"   class="movie-search" placeholder="Search" type="text">
      <router-link  class="search-button" @click="search" to="/movies">search</router-link>
  
      <nav>          
        <router-link class="navbar" to="/">HOME</router-link>
        <router-link class="navbar" @click = "rameshveleba"  to="/movies">MOVIES</router-link>
      </nav>
    </header>
   
  </div>
  <RouterView />
  </template>
  
  <style >
  body{
    background-color: #33333360;
  }
  img{
  width: 200px;
  height: 200px;
  }
  .searched-movies{
  margin-top: 100px;
  width: 800px;
  height: 300px;
  background-color: bisque;
  margin-left: 31%;
  }
  .search-button{
    font-size: 30px;
  }
  
  header {
  display: flex;
  height: 130px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  }
  .name{
  margin-left: 100px;
  font-size: 30px;
  cursor: pointer;
  }
  .navbar{
  font-size: 25px;
  }
  .movie-search{
  width: 900px;
  height: 70px;
  border: none;
  border-radius: 15px;
  padding-left: 20px;
  font-weight: bold;
  color: black;
  }
  
  header nav a {
  text-decoration: none;
  margin-right: 100px;
  }
  
  
  
  </style>
  