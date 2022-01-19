import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import './Form.css'
import {CarValidator} from "../../validators/car.validator";

const Form = ({submit, update = false, info}) => {
    const {
        register, handleSubmit, watch, formState: {errors}
    } = useForm({resolver:joiResolver(CarValidator), mode: "onTouched"});

    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className="form">
                <div className="input-box"><label>Model: <input type="text" defaultValue={update ? info.model : ''} {...register('model')}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div className="input-box"><label>Year: <input type="text" defaultValue={update ? info.year : ''} {...register('year')}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <div className="input-box"><label>Price: <input type="text" defaultValue={update ? info.price : ''} {...register('price')}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <button type={"submit"}>Apply</button>
            </form>
        </div>
    );
};

export default Form;