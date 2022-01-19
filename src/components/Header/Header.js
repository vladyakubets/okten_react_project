import React, {useState} from 'react';
import Modal from "../Modal/Modal";

import './Header.css'
import {carsService} from "../../services/cars.service";

const Header = ({ setNewCar, newCar }) => {
    const [isOpened, setIsOpened] = useState(false);



    const createCar = (formData) => {
        carsService.create(formData).then(r => setNewCar(!newCar))
    }

    return (
        <div className="header">
            <button onClick={() => setIsOpened(true)}>Create new</button>
            <Modal isOpened={isOpened} onClose={(e) => {
                setIsOpened(false)
            }} formSubmit={createCar}>
                <h3>Enter fields of new car</h3>
            </Modal>
        </div>
    );
};

export default Header;