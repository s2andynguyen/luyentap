import { useReducer, useRef } from 'react';
import reducer, { initState } from './reducer';
import { setJob, addJob, deleteJob } from './actions'

function TodoReducer() {
    const [ state, dispatch ] = useReducer(reducer, initState);
    const { job, jobs } = state;

    const inputElement = useRef();
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputElement.current.focus()
    }

    return (
        <div style={{ padding: '20px 0' }}>
            <h3>TodoReducer</h3>
                <h3>TodoList</h3>
                <div className="form-input">
                    <input type="text" className="todo-input" value={job} 
                        ref={inputElement}
                        placeholder='Enter todo...'
                        onChange={(e) => {
                            dispatch(setJob(e.target.value))
                        }}
                    />
                    <button style={{ marginLeft: 10 }} onClick={handleSubmit}>Add</button>
                </div>

                <ul>
                    {jobs.map((job, index) => (
                        <li key={index}>{job} 
                        <span onClick={() => 
                                dispatch(deleteJob(index)
                            )}
                        style={{cursor: 'pointer'}}
                        >&times;</span></li>
                    ))}
                </ul>
                <hr />
        </div>
    );
}

export default TodoReducer;
