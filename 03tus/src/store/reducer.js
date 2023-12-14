import { 
    SET_TODO_INPUT, 
    ADD_TODO, 
    REMOVE_TODO, 
    SET_EDIT_TODO,
    OFF_EDIT_TODO, 
    SAVE_EDIT_TODO,
    SET_CURRENT_EDIT
} from './constant'

const data = JSON.parse(localStorage.getItem('TODO_LIST')) ?? [];
const setLocalStore = (todos) => {
    localStorage.setItem('TODO_LIST', JSON.stringify([...todos]));
    console.log('Luu thanh cong :>> ', todos);
};
export const initState = {
    todos: data,
    todoInput: '',
    currentEdit: ''
};

function reducer(state, action) {
    let resultTodo;
    switch (action.type) {
        case SET_TODO_INPUT:
            resultTodo = {
                ...state,
                todoInput: action.payload,
            };
            break;
        case SET_CURRENT_EDIT:
            resultTodo = {
                ...state,
                currentEdit: action.payload
            }
            break;
        case ADD_TODO :
            const dateId = new Date()
            resultTodo = {
                ...state,
                todos: 
                [
                    ...state.todos, 
                    {
                        id: dateId.getTime(),
                        title: action.payload,
                        completed: false,
                        editing: false,
                    }
                ],
            };
            setLocalStore(resultTodo.todos);
            break;
        case REMOVE_TODO :
            const newTodo = [...state.todos];
            const index = newTodo.findIndex(item => item.id === action.payload)
            newTodo.splice(index, 1);
            resultTodo = {
                ...state,
                todos: newTodo,
            };
            setLocalStore(resultTodo.todos);
            break;

        case SET_EDIT_TODO :
            const editTodo = [...state.todos]
            const editItem = editTodo.find(item => item.id === action.payload)
            editItem.editing = true
            console.log('editItem.editing :>> ', editItem.editing);
            resultTodo = {
                ...state,
                todos: editTodo
            }
            break;
        case OFF_EDIT_TODO :
            const offEditTodo = [...state.todos]
            const offEditItem = offEditTodo.find(item => item.id === action.payload)
            offEditItem.editing = false
            resultTodo = {
                ...state,
                todos: offEditTodo
            }
            break;
        case SAVE_EDIT_TODO :
            const saveEditList = [...state.todos]
            console.log('action.id :>> ', action.id);
            const saveEditItem = saveEditList.find(item => item.id === action.id)
            console.log('saveEditItem :>> ', saveEditItem);
            console.log('action.payload :>> ', action.payload);
            saveEditItem.title = action.payload
            resultTodo = {
                ...state,
                todos: saveEditList
            }
            break;
        default:
            throw new Error('Invalid Action');
    }
    return resultTodo;
}

export default reducer;
