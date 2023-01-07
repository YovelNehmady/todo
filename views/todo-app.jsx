const { useState, useEffect } = React
const { useSelector, useDispatch } = ReactRedux

import { AddTodo } from "../cmps/add-todo.jsx"
import { TodoFilter } from "../cmps/todo-filter.jsx"
import { TodoList } from "../cmps/todo-list.jsx"

import { addTodo, loadTodos, removeTodo } from "../store/todo.action.js"

export function TodoApp() {
    const filterBy = useSelector((storeState) => storeState.filterBy)
    const todos = useSelector((storeState) => storeState.todos)

    useEffect(() => {
        loadTodos(filterBy)
    }, [filterBy])

    function onAddTodo(todo) {
        addTodo(todo)
            .then(() => console.log('todo added'))
            .catch(() => console.log('todo canot be added'))
    }

    function onRemoveTodo(todoId) {
        removeTodo(todoId)
            .then(() => console.log('todo removed'))
            .catch(() => console.log('todo canot be removed'))
    }

    return <section className="todo-index">
        <TodoFilter />
        <AddTodo onAddTodo={onAddTodo} />
        <TodoList todos={todos} onRemoveTodo={onRemoveTodo} />
    </section>
}