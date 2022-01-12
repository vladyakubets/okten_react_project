import './App.css';
import {useEffect, useState} from "react";
import Launch from "./components/Launch/Launch";

function App() {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(resp => resp.json())
            .then(resp => setLaunches(resp))
    }, [])
    return (
        <div className="App">
            {
                launches.map((launch, index) =>
                    <Launch key={launch.launch_date_unix + '' + index} launch={launch}/>)
            }
        </div>
    );
}

export default App;
