import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            return {...state, [action.payload]: state[action.payload] + 1}
        case 'DEC':
            return {...state, [action.payload]: state[action.payload] - 1}
        case 'RESET':
            return {...state, [action.payload]: 0}
        default:
            return state
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {counter1: 0, counter2: 0, counter3: 0});
    return (
        <div className="App">
            <div>
                <div>Counter1: {state.counter1}</div>
                <div>
                    <button onClick={() => dispatch({type: 'INC', payload: 'counter1'})}>INC</button>
                    <button onClick={() => dispatch({type: 'DEC', payload: 'counter1'})}>DEC</button>
                    <button onClick={() => dispatch({type: 'RESET', payload: 'counter1'})}>RESET</button>
                </div>
            </div>
            <div>
                <div>Counter2: {state.counter2}</div>
                <div>
                    <button onClick={() => dispatch({type: 'INC', payload: 'counter2'})}>INC</button>
                    <button onClick={() => dispatch({type: 'DEC', payload: 'counter2'})}>DEC</button>
                    <button onClick={() => dispatch({type: 'RESET', payload: 'counter2'})}>RESET</button>
                </div>
            </div>
            <div>
                <div>Counter3: {state.counter3}</div>
                <div>
                    <button onClick={() => dispatch({type: 'INC', payload: 'counter3'})}>INC</button>
                    <button onClick={() => dispatch({type: 'DEC', payload: 'counter3'})}>DEC</button>
                    <button onClick={() => dispatch({type: 'RESET', payload: 'counter3'})}>RESET</button>
                </div>
            </div>
        </div>
    );
}

export default App;
