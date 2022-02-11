import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MoviesService} from "../../services";


export const getMoviesBySearch = createAsyncThunk(
    'searchSlice/getMoviesBySearch',
    async ({search}, {rejectWithValue}) => {
        try {
            const {results} = await MoviesService.getBySearch(search)
            return {results}
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

export const searchSlice = createSlice(
    {
        name: 'searchSlice',
        initialState: {
            movies: [],
            isOpened: false,
            status: null,
            error: null
        },
        reducers: {
            setSearchIsOpened:((state, action) => {
                state.isOpened = action.payload.isOpened
            })
        },
        extraReducers: {
            [getMoviesBySearch.pending]: (state) => {
                state.status = 'pending'
            },
            [getMoviesBySearch.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.movies = action.payload.results
            },
            [getMoviesBySearch.rejected]: (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            }

        }
    }
)

const searchReducer = searchSlice.reducer

export default searchReducer

export const {setSearchIsOpened} = searchSlice.actions