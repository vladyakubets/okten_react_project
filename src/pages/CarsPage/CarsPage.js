import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {getCars} from "../../store";
import {Car, Form} from "../../components";

const CarsPage = () => {
    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getCars())
    }, [])

    useEffect(() => {
        if (error) {
            navigate('/error')
        }
    }, [error])

    return (
        <div>
            {
                status !== 'fulfilled' && <h1>Loading...</h1>
            }
            <Form/>
            <div className={"cards"}>
                {
                    cars.map(car => <Car key={car.id} car={car}/>)
                }
            </div>
        </div>
    );
};

export {CarsPage};