import axios from "axios";

const instance = axios.create({
  baseURL: "httpS://api.themoviedb.org/3/",
});

export default instance;
