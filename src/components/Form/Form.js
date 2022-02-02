import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addItem} from "../../store/list.slice";

const Form = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (form) => {
        dispatch(addItem({item: {title: form.title, status: false}}))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register("title")}/>
                <button>add</button>
            </form>
        </div>
    );
};

export {Form};