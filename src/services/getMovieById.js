import axios from "axios";
import { BASE_URL, API_KEY } from "./contactsGetMoviesAPI";

axios.defaults.baseURL = BASE_URL;

async function getMovieById(movieId) {
  const url = `/movie/${movieId}?api_key=${API_KEY}`;
  const { data } = await axios.get(url);
  return data;
}

export default getMovieById;
