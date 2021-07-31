import axios from "axios";
import { BASE_URL, API_KEY } from "./contactsGetMoviesAPI";

axios.defaults.baseURL = BASE_URL;

async function getReviewMovie(movieId) {
  const url = `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  const { data } = await axios.get(url);
  return data.results;
}

export default getReviewMovie;
