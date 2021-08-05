import { useState, useEffect } from "react";
import getMoviesAPI from "../services/getMoviesAPI";
import MoviesList from "../Components/MoviesList";
import clearMoviesFromLocalStorage from "../services/clearMoviesFromLocalStorage";

function Homeview() {
  clearMoviesFromLocalStorage();

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getFetchMovies() {
      try {
        const trendingMovies = await getMoviesAPI();
        setMovies(trendingMovies);
      } catch (error) {
        console.log(error);
      }
    }
    getFetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending films today</h1>
      {movies && <MoviesList movies={movies} />}
    </div>
  );
}

export default Homeview;
