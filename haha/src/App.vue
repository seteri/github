<template>
      <div>
      <header>
        <h1>myMovies</h1>

        <nav>          
          <router-link to="/">Home</router-link>
          <router-link to="/tvshows">Tv Shows</router-link>
          <router-link to="/movies">Movies</router-link>
        </nav>
      </header>

      
    </div>

<RouterView />
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
}


header nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 15px;
}



</style>

