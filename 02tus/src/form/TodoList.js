import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('TODO')) ?? []);
    const [input, setInput] = useState('');

    const inputStyle = {
        borderRadius: 10,
        padding: 8,
    };

    const addTodo = (todo) => {
        setTodos((prev) => {
            const newTodo = [...prev, todo];
            localStorage.setItem('TODO', JSON.stringify(newTodo));
            return newTodo;
        });
        setInput('');
        console.log('todo :>> ', todo);
    };
    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        localStorage.setItem('TODO', JSON.stringify(newTodos));

        setTodos(newTodos);
    };
    return (
        <div style={{ padding: '20px 0' }}>
            <h3>TodoList</h3>
            <div className="form-input">
                <input
                    type="text"
                    className="todo-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={inputStyle}
                />
                <button
                    style={{ ...inputStyle, marginLeft: 10, display: 'inline-block' }}
                    onClick={() => addTodo(input)}
                >
                    Add
                </button>
            </div>

            <ul>
                {todos &&
                    todos.map((todo, index) => (
                        <li key={index}>
                            <span>{todo}</span>
                            <span
                                style={{ color: 'red', marginLeft: 30, padding: 8, cursor: 'pointer' }}
                                onClick={() => removeTodo(index)}
                            >
                                X
                            </span>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default TodoList;
