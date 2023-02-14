<template>
  <button @click="test">test</button>
</template>

<script setup>
import { useStore } from 'vuex';
import {  ref } from 'vue'
const store = useStore()
const test = () =>{
  store.dispatch("fetchData")
  console.log(store.state.currencies)
  
}


</script>
