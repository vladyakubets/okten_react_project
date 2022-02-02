import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../services";

export const getUsers = createAsyncThunk(
    'userSlice/getUsers',
    async (_, {rejectWithValue}) => {
        try {
            return await userService.getAll()
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        users: [],
        status: null,
        error: null
    },
    reducers: {
        setUsers: ((state, action) => {
            state.users = action.payload.users
        })
    },
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.status = 'pending'
        },
        [getUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.users = action.payload
        },
        [getUsers.rejected]: (state) => {
            state.status = 'rejected'
            state.error = true
        },

    }
})

const userReducer = userSlice.reducer;

export default userReducer;
export const {setUsers} = userSlice.actions