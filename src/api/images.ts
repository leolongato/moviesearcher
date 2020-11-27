import axios from "axios";

const apiMovies = axios.create({
  baseURL: "https://image.tmdb.org/t/p/w500//",
});

export default apiMovies;



