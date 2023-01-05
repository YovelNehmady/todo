const { useState, useEffect } = React
const { useSelector, useDispatch } = ReactRedux


import { TodoFilter } from "../cmps/todo-filter.jsx"
import { TodoList } from "../cmps/todo-list.jsx"
import { todoService } from "../services/todo.service.js"


export function TodoApp() {
    // const todos = useSelector((storeState) => storeState.todos)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        loadTodos()
    }, [todos])

    function loadTodos() {
        todoService.query()
            .then(setTodos)
            .catch(() => console.log('eror'))
    }

    return <section className="todo-index">
        Hello
        <TodoList todos={todos} />
        <TodoFilter />
    </section>
}