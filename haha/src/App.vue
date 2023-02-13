
<script setup>
import { onMounted } from 'vue';
const store = useStore()
    onMounted(() => {
      store.dispatch("getCurrency")
      console.log(store.state.data)   
  })
</script>

<template>
  
</template>
  
<style >


</style>
