
import { todoService } from "../services/todo.service.js"
import { store, SET_TODOS, REMOVE_TODO, ADD_TODO } from "./store"


export function loadTodos(filterBy) {
    return todoService.query(filterBy)
        .then(todos => {
            console.log(todos)
            return store.dispatch({ type: SET_TODOS, todos })
        })
        .catch(() => console.log('eror'))
}

export function removeTodo(todoId) {
    return todoService.remove(todoId)
        .then(() => {
            store.dispatch({ type: REMOVE_TODO, todoId })
            return Promise
        })
        .catch(() => console.log('canot remove this todo'))
}

export function addTodo(todo) {
    return todoService.save(todo)
        .then(todo => {
            store.dispatch({ type: ADD_TODO, todo })
        })
        .catch(() => console.log('canot add this todo'))
}