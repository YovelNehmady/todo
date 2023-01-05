const { useState, useEffect } = React
const { useSelector, useDispatch } = ReactRedux


import { AddTodo } from "../cmps/add-todo.jsx"
import { TodoFilter } from "../cmps/todo-filter.jsx"
import { TodoList } from "../cmps/todo-list.jsx"
import { ADD_TODO, REMOVE_TODO, SET_TODOS } from "../store/store.js"

import { todoService } from "../services/todo.service.js"

export function TodoApp() {
    const todos = useSelector((storeState) => storeState.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        loadTodos()
    }, [])

    //this functions need to be at the todos-store
    function loadTodos() {
        todoService.query()
            .then(todos => dispatch({ type: SET_TODOS, todos }))
            .catch(() => console.log('eror'))
    }

    function onAddTodo(todo) {
        todoService.save(todo)
            .then(todo => {
                dispatch({ type: ADD_TODO, todo })
            })
            .catch(() => console.log('canot add this todo'))
    }

    function onRemoveTodo(todoId) {
        todoService.remove(todoId)
            .then(() => {
                dispatch({ type: REMOVE_TODO, todoId })
            })
            // .catch(() => console.log('canot remove this todo'))
    }



    return <section className="todo-index">
        <AddTodo onAddTodo={onAddTodo} />
        <TodoList todos={todos} onRemoveTodo={onRemoveTodo} />
        <TodoFilter />
    </section>
}