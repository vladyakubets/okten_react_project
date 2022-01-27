import './App.css';
import {useEffect, useReducer} from "react";
import Cat from "./Components/Cat/Cat";
import Dog from "./Components/Dog/Dog";

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FORM":
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.payload.field]: action.payload.value
                }
            }
        case "ADD_ANIMAL":
            return {
                ...state,
                [action.payload]: [
                    ...state[action.payload],
                    state.form[action.payload.slice(0, 3)]
                ],
                form: {
                    ...state.form,
                    [action.payload.slice(0, 3)]: ''
                }
            }
        case "DELETE_ANIMAL":
            return {
                ...state,
                [action.payload.field]: [
                    ...state[action.payload.field].filter(animal => animal !== action.payload.value)
                ]
            }
        default:
            return state
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: [], form: {cat: '', dog: ''}});

    useEffect(() => {
        console.log(state);
    }, [state])
    return (
        <div className="App">
            <form onSubmit={(e) => e.preventDefault()} className="box">
                <div>
                    <label>Cat: <input type="text" name="cat" value={state.form.cat} onChange={(e) => dispatch({
                        type: "SET_FORM", payload: {
                            field: "cat", value: e.target.value
                        }
                    })}/></label>
                    <button onClick={() => dispatch({type: "ADD_ANIMAL", payload: "cats"})}>add</button>
                </div>
                <div>
                    <label>Dog: <input type="text" name="dog" value={state.form.dog} onChange={(e) => dispatch({
                        type: "SET_FORM", payload: {
                            field: "dog", value: e.target.value
                        }
                    })}/></label>
                    <button onClick={() => dispatch({type: "ADD_ANIMAL", payload: "dogs"})}>add</button>
                </div>
            </form>
            <div className="box">
                <div>{state.cats.map((cat, index) => <Cat key={index} cat={cat} dispatch={dispatch}/>)}</div>
                <div>{state.dogs.map((dog, index) => <Dog key={index} dog={dog} dispatch={dispatch}/>)}</div>
            </div>
        </div>
    );
}

export default App;
