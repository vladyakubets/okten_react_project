import React from 'react';

const Cat = ({cat, dispatch}) => {
    return (
        <div>
            {cat}
            <button onClick={()=>dispatch({type:"DELETE_ANIMAL", payload: {field: "cats", value: cat}})}>delete</button>
        </div>
    );
};

export default Cat;