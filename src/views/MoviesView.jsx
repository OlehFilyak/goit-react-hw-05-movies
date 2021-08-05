import { useState } from "react";

import getMoviesBySearch from "../services/getMoviesBySearch";
import MoviesList from "../Components/MoviesList";
import {
  onShowInfoNotification,
  onShowErrorNotification,
} from "../services/notifications";

function MoviesView() {
  const moviesInLocalStorageHistory = JSON.parse(
    localStorage.getItem("searchMovies")
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [searchMovies, setSearchMovies] = useState(moviesInLocalStorageHistory);

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
      localStorage.setItem("searchMovies", JSON.stringify(movies));
      if (movies.length === 0) {
        onShowErrorNotification();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const resetState = () => {
    setSearchQuery("");
    // setSearchMovies([]);
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

// import { useState, useEffect, lazy } from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
// import Table from '../components/Table/Table';
// import SortSelector from '../components/SortSelector/SortSelector';

// const initialState = [
//   { id: 1, value: 100 },
//   { id: 2, value: 400 },
//   { id: 3, value: 200 },
//   { id: 4, value: 500 },
//   { id: 5, value: 300 },
// ];

// const sortOptions = [
//   { value: 'ascending', label: 'По возрастанию' },
//   { value: 'descending', label: 'По убыванию' },
// ];

// export default function TableView() {
//   const history = useHistory();
//   const location = useLocation();
//   const [expenses, setExpenses] = useState(initialState);

//   const sortOrder =
//     new URLSearchParams(location.search).get('sortBy') ?? 'ascending';

//   const onSortOrderChange = order => {
//     history.push({ ...location, search: `sortBy=${order}` });
//   };

//   useEffect(() => {
//     if (location.search !== '') {
//       return;
//     }

//     history.push({ ...location, search: `sortBy=ascending` });
//   }, [history, location]);

//   useEffect(() => {
//     setExpenses(prevExpenses =>
//       [...prevExpenses].sort((a, b) => {
//         return sortOrder === 'ascending'
//           ? a.value - b.value
//           : b.value - a.value;
//       }),
//     );
//   }, [sortOrder]);

//   return (
//     <>
//       <SortSelector
//         options={sortOptions}
//         onChange={onSortOrderChange}
//         value={sortOrder}
//       />
//       <Table items={expenses} />
//     </>
//   );
// }
