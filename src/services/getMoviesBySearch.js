import axios from "axios";
import { BASE_URL, API_KEY } from "./contactsGetMoviesAPI";

axios.defaults.baseURL = BASE_URL;

async function getMoviesBySearch(searchQuery) {
  const url = `/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${searchQuery}&include_adult=true`;
  const { data } = await axios.get(url);
  return data.results;
}

export default getMoviesBySearch;
