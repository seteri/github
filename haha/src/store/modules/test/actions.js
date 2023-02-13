import axios from 'axios';
export  const  getPoster = async ({commit},movieName) =>{
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${movieName}`);
        commit("poster",response.data)
}

export const gurami = async ({commit}) =>{
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${"batman"}`);
        commit("poster",response.data)

}