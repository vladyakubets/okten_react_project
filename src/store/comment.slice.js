import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentService} from "../services";

export const getComments = createAsyncThunk(
    'commentSlice/getComments',
    async (_, {rejectWithValue}) => {
        try {
            return await commentService.getAll()
        } catch (e) {
            return rejectWithValue('Something went wrong...')
        }
    }
)

const commentSlice = createSlice({
    name: "commentSlice",
    initialState: {
        comments: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getComments.pending]: (state) => {
            state.status = 'pending'
        },
        [getComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.comments = action.payload
        },
        [getComments.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

    }
})

const commentReducer = commentSlice.reducer;

export default commentReducer;