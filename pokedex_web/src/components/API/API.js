import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export function clearBaseUrl(url) {
  const newUrl = url.replace(BASE_URL, "");
}

export default API;
