import { todoService } from "../services/todo.service.js"
import { store, SET_TODOS, REMOVE_TODO, ADD_TODO } from "./store"


export function loadTodos() {
    todoService.query()
        .then(todos => store.dispatch({ type: SET_TODOS, todos }))
        .catch(() => console.log('eror'))
}

export function removeTodo(todoId) {
    todoService.remove(todoId)
        .then(() => {
            store.dispatch({ type: REMOVE_TODO, todoId })
        })
        .catch(() => console.log('canot remove this todo'))
}

export function addTodo(todo) {
    todoService.save(todo)
        .then(todo => {
            store.dispatch({ type: ADD_TODO, todo })
        })
        .catch(() => console.log('canot add this todo'))
}