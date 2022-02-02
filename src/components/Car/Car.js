import React from 'react';
import {useDispatch} from "react-redux";

import {deleteCar, setForm} from "../../store";

const Car = ({car}) => {
    const dispatch = useDispatch();

    const update =()=>{
        dispatch(setForm({form: car}))
    }

    const deleteCarItem =()=>{
        dispatch(deleteCar({id: car.id}))
    }

    return (
        <div className={"card"}>
            <div>
                <p>{car.id}</p>
                <p>{car.model}</p>
                <p>{car.price}</p>
                <p>{car.year}</p>
            </div>
            <button onClick={deleteCarItem}>delete</button>
            <button onClick={update}>update</button>
        </div>
    );
};

export {Car};