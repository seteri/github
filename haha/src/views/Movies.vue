<template>

  <main>
      <h2>Featured Movies</h2>
      <ul>
        <li v-for="movie in $store.state.featuredMovies" :key="movie.id">
          <img :src="movie.poster" alt="Movie Poster">
          <p>{{ movie.title }}</p>
        </li>
      </ul>
    </main>
  </template>
  
  <script>




</script>

<style>

main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    padding: 20px;
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
