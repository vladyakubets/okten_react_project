import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MoviesService} from "../../services";


export const getGenres = createAsyncThunk(
    'genresSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const genres = await MoviesService.getGenres()
            return {genres: [...genres.genres]}
        } catch (e) {
            rejectWithValue(e)
        }
    }
)
export const getMoviesByGenre = createAsyncThunk(
    'genresSlice/getMoviesByGenre',
    async ({id,page}, {rejectWithValue}) => {
        try {
            const movies = await MoviesService.getByGenreId(id,page)
            return {movies}
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

export const genresSlice = createSlice(
    {
        name: 'genresSlice',
        initialState: {
            movies: null,
            genres: null,
            total_pages: null,
            statusGenres: null,
            statusMovies: null,
            error: null
        },
        reducers: {},
        extraReducers: {
            [getGenres.pending]: (state) => {
                state.statusGenres = 'pending'
            },
            [getGenres.fulfilled]: (state, action) => {
                state.statusGenres = 'fulfilled'
                state.genres = action.payload.genres
            },
            [getGenres.rejected]: (state, action) => {
                state.statusGenres = 'rejected'
                state.error = action.payload
            },
            [getMoviesByGenre.pending]: (state) => {
                state.statusMovies = 'pending'
            },
            [getMoviesByGenre.fulfilled]: (state, action) => {
                state.statusMovies = 'fulfilled'
                state.movies = action.payload.movies
                state.total_pages = action.payload.movies.total_pages
            },
            [getMoviesByGenre.rejected]: (state, action) => {
                state.statusMovies = 'rejected'
                state.error = action.payload
            }

        }
    }
)

const genresReducer = genresSlice.reducer

export default genresReducer