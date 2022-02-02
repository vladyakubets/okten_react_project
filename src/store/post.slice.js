import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../services";

export const getPosts = createAsyncThunk(
    'postSlice/getPosts',
    async (_, {rejectWithValue}) => {
        try {
            return await postService.getAll()
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

const postSlice = createSlice({
    name: "postSlice",
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.status = 'pending'
        },
        [getPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.posts = action.payload
        },
        [getPosts.rejected]: (state) => {
            state.status = 'rejected'
            state.error = true
        },

    }
})

const postReducer = postSlice.reducer;

export default postReducer;