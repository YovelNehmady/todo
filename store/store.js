import { todoService } from "../services/todo.service.js"
const { createStore } = Redux

export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const SET_FILTER = 'SET_FILTER'

const initialState = {
    todos: [],
    filterBy: todoService.getEmptyFilter(),
    user: null
    // user: userService.getLoggedinUser()
}

function appReducer(state = initialState, action) {
    let todos
    let filterBy
    switch (action.type) {
        //_TODOS
        case SET_TODOS:
            return { ...state, todos: action.todos }

        case ADD_TODO:
            todos = [...state.todos, action.todo]
            return { ...state, todos }

        case REMOVE_TODO:
            todos = state.todos.filter(t => t._id !== action.todoId)
            return { ...state, todos }

        //_FILTER
        case SET_FILTER:
            return { ...state, filterBy: action.filterBy }

        //_USER


        default:
            return { ...state }
    }
}

export const store = createStore(appReducer)
store.subscribe(() => {
    console.log('Current state is:', store.getState())
})
