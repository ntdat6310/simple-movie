const tmdbEndpoint = "https://api.themoviedb.org/3";

const tmdbImageOriginalEndpoint = "https://image.tmdb.org/t/p/original/";
const tmdbImage500Endpoint = "https://image.tmdb.org/t/p/w500/";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const api_key_tmdb = "149cdb04d796291d2632d2e7c114d66e";

export const default_img_path =
  "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

export const tmdb = {
  getMovieList: (type, page = 1) => {
    return `${tmdbEndpoint}/movie/${type}?api_key=${api_key_tmdb}&page=${page}`;
  },
  getSearchMovie: (searchKey, page = 1) => {
    return `${tmdbEndpoint}/search/movie?api_key=${api_key_tmdb}&query=${searchKey}&page=${page}`;
  },
  getMovieDetails: (movieId) => {
    return `${tmdbEndpoint}/movie/${movieId}?api_key=${api_key_tmdb}`;
  },
  getMovieMeta: (movieId, type) => {
    return `${tmdbEndpoint}/movie/${movieId}/${type}?api_key=${api_key_tmdb}`;
  },
  imageOriginal: (imgPath) => {
    return `${tmdbImageOriginalEndpoint}${imgPath}`;
  },
  image500: (imgPath) => {
    return `${tmdbImage500Endpoint}${imgPath}`;
  },
};
