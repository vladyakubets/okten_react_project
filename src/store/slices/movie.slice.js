import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MoviesService} from "../../services";


export const getMovieDesc = createAsyncThunk(
    'movieSlice/getMovieDesc',
    async ({id}, {rejectWithValue}) => {
        try {
            const credits = await MoviesService.getCredits(id)
            const description = await MoviesService.getDetails(id)
            const similar = await MoviesService.getSimilar(id)
            return {credits, description,similar}
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
            credits: null,
            similar: null,
            status: null,
            error: null
        },
        reducers: {
            resetStore: (state) => {
                state.movieDesc = null
                state.credits = null
                state.similar = null
                state.status = null
                state.error = null
            }
        },
        extraReducers: {
            [getMovieDesc.pending]: (state) => {
                state.status = 'pending'
            },
            [getMovieDesc.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.movieDesc = action.payload.description
                state.credits = action.payload.credits.cast.slice(0,10)
                state.similar = action.payload.similar.results.slice(0,10)
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