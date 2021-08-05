export default function clearMoviesFromLocalStorage() {
  return localStorage.setItem("searchMovies", JSON.stringify([]));
}
