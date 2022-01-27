import './App.css';
import {useEffect, useState} from "react";

function App() {
    let [floors, setFloors] = useState([]);
    const [normalizedFloors, setNormalizedFloors] = useState([]);

    const handleFloors = (action) => {
        if (action === "add") {
            let len = floors.length + 1
            let count = 2 * len - 1

            setFloors([...floors, '*'.repeat(count)])
        } else {
            setFloors([...floors.slice(0, floors.length - 1)])
        }
    }

    useEffect(() => {
        let len = floors.length
        let count = 2 * len - 1
        let floorsNorm = [...floors]
        floorsNorm = floorsNorm.map(floor => {
            if (floor.length < count) {
                let spaces = (count - floor.length)/2
                for (let i = 0; i < spaces; i++) {
                    floor = '&nbsp;'+ floor +'&nbsp;'
                }
                return floor
            }
            return floor
        })
        setNormalizedFloors([...floorsNorm])

    }, [floors])
    console.log(normalizedFloors);
    return (
        <div className="App">
            <div>floors: {floors.length}</div>
            <button onClick={(e) => {
                handleFloors(e.target.innerText)
            }}>add
            </button>
            <button onClick={(e) => {
                handleFloors(e.target.innerText)
            }}>remove
            </button>
            {
                normalizedFloors.map((floor, index) => <div key={index} dangerouslySetInnerHTML={{__html: floor}}/>)
            }
        </div>
    );
}

export default App;
