import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./slices/movies.slice";
import movieReducer from "./slices/movie.slice";
import genresReducer from "./slices/genres.slice";
import searchReducer from "./slices/search.slice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movieDesc: movieReducer,
        genres: genresReducer,
        searchMovies: searchReducer
    }
})