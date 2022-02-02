import {configureStore} from "@reduxjs/toolkit"

import carReducer from "./car.slice";
import userReducer from "./user.slice";
import postReducer from "./post.slice";
import commentReducer from "./comment.slice";

export const store = configureStore({
    reducer: {
        carReducer,
        userReducer,
        postReducer,
        commentReducer
    }
})

