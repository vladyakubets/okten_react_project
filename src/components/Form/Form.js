import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {createCar, setForm, updateCar} from "../../store";

const Form = () => {
    const {form} = useSelector(state => state['carReducer']);
    const {handleSubmit, reset, register, setValue} = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        if (form) {
            setValue('model', form.model)
            setValue('price', form.price)
            setValue('year', form.year)
        } else {
            dispatch(setForm({form: null}))
        }
    }, [form])

    const resetForm = () => {
        dispatch(setForm({form: null}))
        setValue('model', '')
        setValue('price', '')
        setValue('year', '')
    }

    const submit = (car) => {
        if (form) {
            dispatch(updateCar({car: {...car, id: form.id}}))
            return
        }
        dispatch(createCar({car}))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" {...register('model')}/></label>
                <label>Price: <input type="text" {...register('price')}/></label>
                <label>Year: <input type="text" {...register('year')}/></label>
                <button>{form ? "update" : "add"}</button>
                {form && <button onClick={resetForm}>reset update</button>}
            </form>
        </div>
    );
};

export {Form};