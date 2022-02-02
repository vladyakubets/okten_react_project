import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

import {carService} from "../services";

export const getCars = createAsyncThunk(
    'carSlice/getCars',
    async ({rejectWithValue}) => {
        try {
            return await carService.getAll()
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, {dispatch}) => {
        try {
            const newCar = await carService.create(car)
            dispatch(addCar({car: newCar}))
        } catch (e) {
            console.log(e)
        }
    }
)

export const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({car}, {dispatch}) => {
        try {
            console.log({car});
            const newCar = await carService.update(car.id, car)
            dispatch(changeCar({newCar}))
        } catch (e) {
            console.log(e)
        }
    }
)

export const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {dispatch}) => {
        try {
            await carService.delete(id)
            dispatch(removeCar({id}))
        } catch (e) {
            console.log(e)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        form: null,
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.car)
        },
        changeCar: (state, action) => {
            state.cars = state.cars.map(car => {
                if (car.id === action.payload.newCar.id) {
                    return action.payload.newCar
                }
                return car
            })
        },
        setForm: (state, action) => {
            state.form = action.payload.form
        },
        removeCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }

    },
    extraReducers: {
        [getCars.pending]: (state) => {
            state.status = 'pending'
        },
        [getCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getCars.rejected]: (state) => {
            state.status = 'rejected'
            state.error = true
        },
    }
})

const carReducer = carSlice.reducer;

export default carReducer;
export const {addCar, setForm, changeCar, removeCar} = carSlice.actions