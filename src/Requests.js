const API_KEY = "2e28f003cdb062fa9bc6076e983ec449";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchedComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchedHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchedRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchedDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
