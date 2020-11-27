import axios from "axios";

const apiMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie",
  headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmFlM2RkY2UzMTI0YmZlZDkzYjc5ZjIxZjgxMGE0OCIsInN1YiI6IjVmYTMzZTNiZWNiZGU5MDAzYzY4ZjY1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TYPCQZ3t9NcixqgmVPrFqHnB0Ym3eLcpQqhe_HMOVtU'
    },
});

export default apiMovies;



