import React, {useState} from 'react';

import './Car.css'
import {carsService} from "../../services/cars.service";
import Modal from "../Modal/Modal";

const Car = ({car, setNewCar, newCar}) => {
    const [isOpened, setIsOpened] = useState(false);

    const deleteCar = (id) => {
        carsService.delete(id).then(r => setNewCar(!newCar))
    }

    const updateCar = (data) => {
        setIsOpened(false)
        carsService.updateById(car.id, data).then(r => setNewCar(!newCar))
    }

    return (
        <div className="car">
            <Modal isOpened={isOpened} onClose={(e) => {
                setIsOpened(false)
            }} formSubmit={updateCar} update={true} info={car} >
                <h3>Change needed fields</h3>
            </Modal>
            <div className="car-info">
                <div><b>carId:</b> {car.id}</div>
                <div><b>Model:</b> {car.model}</div>
                <div><b>Year:</b> {car.year}</div>
                <div><b>Price:</b> {car.price}</div>
            </div>
            <button onClick={()=> deleteCar(car.id)}>Delete</button>
            <button onClick={()=> setIsOpened(true)}>Update</button>
        </div>
    );
};

export default Car;