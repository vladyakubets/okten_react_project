import {createSlice} from "@reduxjs/toolkit";

export const ListSlice = createSlice({
    name: "ListSlice",
    initialState: {
        list: []
    },
    reducers: {
        addItem: (state, action) => {
            state.list.push({...action.payload.item,id: new Date().getTime()})
        },
        removeItem: (state, action) => {
            state.list = state.list.filter(listItem => listItem.title !== action.payload.item.title)
        },
        setIsFinished: (state, action) => {
            state.list = state.list.map(listItem => {
                if (listItem.title === action.payload.item.title) {
                    return {...listItem, status: !listItem.status}
                }
                return listItem
            })
        }
    }
})

const ListReducer = ListSlice.reducer;

export default ListReducer;
export const {addItem, removeItem, setIsFinished} = ListSlice.actions