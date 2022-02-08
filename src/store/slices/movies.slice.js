import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MoviesService} from "../../services";


export const getMovies = createAsyncThunk(
    'moviesSlice/getMovies',
    async ({page}, {rejectWithValue, dispatch}) => {
        try {
            return await MoviesService.getByPage(page)
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

export const moviesSlice = createSlice(
    {
        name: 'moviesSlice',
        initialState: {
            movies: [],
            total_pages: null,
            status: null,
            error: null
        },
        reducers: {
            setMovies: (state, action) => {
                state.movies = action.payload.movies
            }
        },
        extraReducers: {
            [getMovies.pending]: (state, action) => {
                state.status = 'pending'
            },
            [getMovies.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.movies = action.payload.results
                state.total_pages = action.payload.total_pages
            },
            [getMovies.rejected]: (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            }

        }
    }
)

const moviesReducer = moviesSlice.reducer

export default moviesReducer