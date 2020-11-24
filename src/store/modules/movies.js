import axios from "@/plugins/axios";
import IDs from "@/store/mock/imdb_top250";

function serializeResponse(movies) {
  return movies.reduce((acc, movie) => {
    acc[movie.imdbID] = movie;
    return acc;
  }, {});
}

import mutations from "@/store/mutations";
const { MOVIES } = mutations;

const moviesStore = {
  namespaced: true,
  state: {
    top250IDs: IDs,
    moviesPerPage: 12,
    currentPage: 1,
    movies: {}
  },
  getters: {
    slicedIDs: ({ top250IDs }) => (from, to) => top250IDs.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
    moviesList: ({ movies }) => movies
  },
  mutations: {
    [MOVIES](state, value) {
      state.movies = value;
    }
  },
  actions: {
    initMoviesStore: {
      handler({ dispatch }) {
        dispatch("fetchMovies");
      },
      root: true
    },
    async fetchMovies({ getters, commit }) {
      try {
        const { currentPage, moviesPerPage, slicedIDs } = getters;
        const from = currentPage * moviesPerPage - moviesPerPage;
        const to = currentPage * moviesPerPage;
        const moviesToFetch = slicedIDs(from, to);
        const requests = moviesToFetch.map(id => axios.get(`/?i=${id}`));
        const response = await Promise.all(requests);
        const movies = serializeResponse(response);
        commit("MOVIES", movies);
      } catch (error) {
        console.log(error);
      }
    }
  }
};

export default moviesStore;
