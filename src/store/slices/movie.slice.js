import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MoviesService} from "../../services";


export const getMovieDesc = createAsyncThunk(
    'movieSlice/getMovieDesc',
    async ({id}, {rejectWithValue}) => {
        try {
            return await MoviesService.getDetails(id)
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

export const movieSlice = createSlice(
    {
        name: 'movieSlice',
        initialState: {
            movieDesc: null,
            status: null,
            error: null
        },
        reducers: {
            resetStore: (state) => {
                state.movieDesc = null
                state.status = null
                state.error = null
            }
        },
        extraReducers: {
            [getMovieDesc.pending]: (state, action) => {
                state.status = 'pending'
            },
            [getMovieDesc.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.movieDesc = action.payload
            },
            [getMovieDesc.rejected]: (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            }

        }
    }
)

const movieReducer = movieSlice.reducer

export default movieReducer
export const {resetStore} = movieSlice.actions