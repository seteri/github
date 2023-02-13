
<script>
import  myModule  from  "../store/modules/test/index"
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup(){
    const router = useRouter();
    const redirectToPage = (index) => {
      router.push({
        name: 'ImageInfo',
        params: { index },
      });
    };


    const { state } = myModule;
    return{
      redirectToPage,
      state
    }
  }

}
</script>

<template>

  <div class="gela">
    <div class="card" @click="redirectToPage(index)" :key="index"  v-for="img,index in state.state.posterUrl">
    <img  :src="'http://image.tmdb.org/t/p/w500/'+img.img" alt="Loading">
     <p class="movie-name">{{ img.post}}</p>
    </div>
  </div>
</template>

<style scoped>
.status{
  font-size: 40px;
  color: white;
}
.card{
  margin-top: 30px;
  width: 70%;
  height: 80%;
  margin-left: 14%;
}
.movie-name{
  font-size: 40px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  
}
img{
  cursor: pointer;
  width: 100%;
  height: 90%;
  border-radius: 10px;
  margin: 0;
}

  .gela{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;   
  }
*{
  background-color: gray;
}


</style>
