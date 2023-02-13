export const poster = (state,api) =>{
    state.state.posterUrl = []
    for(let a=0;a<18;a++){
        state.state.posterUrl.push({id:a, img: api.results[a].poster_path, post: api.results[a].title, age:api.results[a].release_date })
    }
    
}

