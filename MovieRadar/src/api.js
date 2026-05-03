import axios from "axios";

const API_KEY = "c51638ce214c1b6687284d5f54563887";

export const fetchTrending = () => {
    return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
}

export const searchMovies = (query) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
}

export const movieDetail = (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
}