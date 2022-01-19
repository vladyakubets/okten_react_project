import React, {useEffect, useState} from 'react';

import {carsService} from "../../services/cars.service";
import Car from "../Car/Car";
import './Cars.css'

const Cars = ({newCar, setNewCar}) => {
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        carsService.getAll().then(data => setCars(data))
    }, [newCar])

    return (
        <div className="cars">
            {
                cars.map(car => <Car key={car.id} car={car} setNewCar={setNewCar} newCar={newCar}/>)
            }
        </div>
    );
};

export default Cars;