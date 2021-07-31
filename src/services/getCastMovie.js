import axios from "axios";
import { BASE_URL, API_KEY } from "./contactsGetMoviesAPI";

axios.defaults.baseURL = BASE_URL;

async function getMovieById(movieId) {
  const url = `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  const { data } = await axios.get(url);
  return data.cast;
}

export default getMovieById;
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
