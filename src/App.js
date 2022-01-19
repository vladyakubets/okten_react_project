import './App.css';
import Cars from "./components/Cars/Cars";
import Header from "./components/Header/Header";
import {useState} from "react";

function App() {
    const [newCar, setNewCar] =useState(false)
    return (
        <div className="App">
            <Header setNewCar={setNewCar} newCar={newCar}/>
            <Cars newCar={newCar} setNewCar={setNewCar}/>
        </div>
    );
}

export default App;
