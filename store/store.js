import { todoService } from "../services/todo.service.js"
const { createStore } = Redux

export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const SET_FILTER = 'SET_FILTER'
// export const SET_FILTER_BY_TXT = 'SET_FILTER_BY_TXT'
// export const SET_FILTER_BY_ISDONE = 'SET_FILTER_BY_ISDONE'

const initialState = {
    todos: [],
    filterBy: [],
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
            filterBy = [ action.filter]
            console.log(filterBy);
            return { ...state, filterBy }

        default:
            return { ...state }
    }
}

export const store = createStore(appReducer)
store.subscribe(() => {
    console.log('Current state is:', store.getState())
})
