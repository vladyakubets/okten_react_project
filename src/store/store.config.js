import {configureStore} from "@reduxjs/toolkit"

import ListReducer from "./list.slice";

export const store = configureStore({
    reducer: {
        ListReducer
    }
})