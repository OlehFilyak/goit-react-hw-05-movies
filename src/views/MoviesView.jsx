import { useState } from "react";
import getMoviesBySearch from "../services/getMoviesBySearch";
import MoviesList from "../Components/MoviesList";
import {
  onShowInfoNotification,
  onShowErrorNotification,
} from "../services/notifications";

function MoviesView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery.trim() === "") {
      onShowInfoNotification();
      return;
    }

    getFetchMovies();

    resetState();
  };

  async function getFetchMovies() {
    try {
      const movies = await getMoviesBySearch(searchQuery);
      setSearchMovies(movies);

      if (movies.length === 0) {
        onShowErrorNotification();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const resetState = () => {
    setSearchQuery("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleSearchQuery}
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>

      <div>
        {searchMovies.length === 0 ? (
          <h1>Введіть пошуковий запит у формі вище</h1>
        ) : (
          <h1>Search results</h1>
        )}
        {searchMovies && <MoviesList movies={searchMovies} />}
      </div>
    </>
  );
}

export default MoviesView;
