<template>

  </template>
  
  <script>




</script>

<style scoped>

main {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: center;
      padding: 20px;
  }
  ul{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  main ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 400px;
    margin: 20px;
    background-color: #ddd;
    border-radius: 10px;
    box-shadow: 2px 2px 5px #333;
    overflow: hidden;
  }
  
  main ul li img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
  
  main ul li p {
    margin: 10px;
  }
</style>
