<template>
      <div>
      <header>
        <h1 class="name">FMOVIES</h1>
        <input v-model="searchedWords"   class="movie-search" placeholder="Search" type="text">
        <button @click="search">search</button>

        <nav>          
          <router-link class="navbar" to="/">HOME</router-link>
          <router-link class="navbar" to="/tvshows">SHOWS</router-link>
          <router-link class="navbar" to="/movies">MOVIES</router-link>
        </nav>
      </header>
     
        
      
    </div>

<RouterView />
</template>
<script>
import store from "./store/store"
import { onMounted, ref } from "vue";
export default {
  setup() {
    let count = 0
    let image1 = ref("")
    let searchedWords = ref("")

   onMounted(()=>{
   }) 

   const gela = () =>{

   }

   const search = () =>{
      store.dispatch("getPoster",searchedWords.value)
      
   }


    return{
      search,
      image1,
      gela,
      count,
      searchedWords
      
    }
    
  }

};
</script>

<style scoped>
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
.movie-search{
  color: black;
}
header {
  display: flex;
  height: 110px;
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
  width: 500px;
  height: 40px;
  border: none;
  border-radius: 15px;
  padding-left: 20px;
  font-weight: bold;
}
header nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 25px;

}


</style>

