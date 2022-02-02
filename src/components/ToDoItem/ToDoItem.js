import React from "react";
import {useDispatch} from "react-redux";

import {removeItem, setIsFinished} from "../../store/list.slice";

const ToDoItem = ({item}) => {
    const dispatch = useDispatch();
    return (
        <div className={"toDoItem"}>
            <input type={"checkbox"} value={item.status} onChange={() => dispatch(setIsFinished({item}))}/>
            <p style={item.status ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{item.title}</p>
            <button onClick={() => dispatch(removeItem({item}))}>delete</button>
        </div>
    );
};

export {ToDoItem};