import { 
    SET_TODO_INPUT, 
    ADD_TODO, 
    REMOVE_TODO, 
    SET_EDIT_TODO,
    OFF_EDIT_TODO,
    SAVE_EDIT_TODO,
    SET_CURRENT_EDIT
} from './constant'

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})
export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})
export const removeTodo = payload => ({
    type: REMOVE_TODO,
    payload
})
export const offEditTodo = payload => ({
    type: OFF_EDIT_TODO,
    payload
})
export const setEditTodo = payload => ({
    type: SET_EDIT_TODO,
    payload
})
export const setCurrentEdit = payload => ({
    type: SET_CURRENT_EDIT,
    payload
})
export const saveEditTodo = (payload, id) => ({
    type: SAVE_EDIT_TODO,
    payload,
    id
})