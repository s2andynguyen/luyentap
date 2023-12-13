import { useReducer } from 'react';

// useState
// 1. Init state: 0
// 2. Actions: Up {state + 1} / Dow {state - 1}

// useReducer
// 1. Init state: 0
// 2. Actions: Up {state + 1} / Dow {state - 1}
// 3. Reducer
// 4. Dispatch

// init
const initState = 0;

// actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// reducer
const reducer = (state, action) => {
    switch(action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw Error("Invalid action")
    }
}

function UseReducer() {

    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <h3>UseReducer</h3>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <hr />
        </div>
    );
}

export default UseReducer;
