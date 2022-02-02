import "./App.css";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {Form, ToDoItem} from "./components";

function App() {
    const {list} = useSelector(state => state["ListReducer"]);
    const [stats, setStats] = useState({all: 0, completed: 0});

    useEffect(() => {
        setStats({...stats, all: list.length, completed: list.filter(listItem => listItem.status === true).length})
    }, [list])

    return (
        <div className="App">
            <div>All: {stats.all}, Completed: {stats.completed}</div>
            <Form/>
            {
                list.map(listItem => <ToDoItem key={listItem.id} item={listItem}/>)
            }
        </div>
    );
}

export default App;
