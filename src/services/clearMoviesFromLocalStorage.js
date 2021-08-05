export default function clearMoviesFromLocalStorage() {
  if (JSON.parse(localStorage.getItem("searchMovies")).length !== 0) {
    localStorage.setItem("searchMovies", JSON.stringify([]));
  }
}
