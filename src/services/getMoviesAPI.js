import axios from "axios";
import { BASE_URL, API_KEY } from "./contactsGetMoviesAPI";

axios.defaults.baseURL = BASE_URL;

async function getMoviesAPI() {
  const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  const { data } = await axios.get(url);
  // console.log(data.results);
  return data.results;
}

export default getMoviesAPI;
