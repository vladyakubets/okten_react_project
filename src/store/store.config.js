import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./slices/movies.slice";
import movieReducer from "./slices/movie.slice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movieDesc: movieReducer
    }
})