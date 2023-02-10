<template>
  <div class="div">
    <img @click="redirectToInfoPage(img.id,img.post)" class="image" v-for="img in $store.state.posterUrl"  :src="'http://image.tmdb.org/t/p/w500/'+img.img" alt="Loading">  </div>
</template>
  
<script>
import { mapActions } from 'vuex'
import store from "../store/store"

export default {
  methods: {
    ...mapActions(['navigateToSection']),
    redirectToInfoPage(imgId,imgPost) {
      store.state.info = imgPost
      this.navigateToSection(imgId)
      this.$router.push({ name: 'info', params: { id: imgId } })
      
    }
  }
}
</script>



<style scoped>
  .image{
    width: 200px;
    height: 200px;
    margin-bottom: 30px;

  }
  .div{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }


</style>
