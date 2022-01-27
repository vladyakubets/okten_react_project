import React from 'react';

const Dog = ({dog, dispatch}) => {
    return (
        <div>
            {dog}
            <button onClick={()=>dispatch({type:"DELETE_ANIMAL", payload: {field: "dogs", value: dog}})}>delete</button>
        </div>
    );
};

export default Dog;