import { useStore, actions } from '../store';
import './style.css';
function TodoContext() {
    const [state, dispatch] = useStore();
    const { todos, todoInput, currentEdit } = state;

    const handleAddTodo = () => {
        todoInput && dispatch(actions.addTodo(todoInput));
        dispatch(actions.setTodoInput(''));
    }
    const handleSetEdit = (content, id) => {
        dispatch(actions.setEditTodo(id))
        dispatch(actions.setCurrentEdit(content))
    }
    const handleSaveEdit = (content, id) => {
        console.log('handleSaveEdit :>> ', id);
        dispatch(actions.offEditTodo(id))
        dispatch(actions.saveEditTodo(content, id))
        dispatch(actions.setCurrentEdit(''))
    }
    console.log('todoInput :>> ', todoInput);
    return (
        <div className="todo-wrapper">
            <h3>Todo React-context</h3>
            <div className="form-group">
                <input
                    className="todo-input"
                    placeholder="Todo input..."
                    type="text"
                    value={todoInput}
                    onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
                />
                <button className="todo-btn" onClick={handleAddTodo}>AddTodo</button>
            </div>

            <ul className="list-todo">
                {todos && todos.map((todo, index) => 
                    <li key={todo.id} className='todo-item'>
                        {todo.editing ? 
                            <input
                                className="todo-input"
                                placeholder="Todo input..."
                                type="text"
                                value={currentEdit}
                                onChange={(e) => dispatch(actions.setCurrentEdit(e.target.value))}
                            />
                            :<div className='todo-item__name'>{todo.title}</div> 
                        }
                        <div className='todo-item__option'>
                            {todo.editing ? 
                                <button className='todo-item__btn--edit'
                                    onClick={() => handleSaveEdit(currentEdit, todo.id)}
                                >Save</button>
                                : 
                                <button className='todo-item__btn--edit'
                                    onClick={() => handleSetEdit(todo.title, todo.id)}
                                >Edit</button>
                            }

                            
                            <button className='todo-item__btn--delete'
                                onClick={() => dispatch(actions.removeTodo(todo.id))}
                            >X</button>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}
export default TodoContext;
