import { TodoFilter } from "../cmps/todo-filter.jsx"
import { TodoList } from "../cmps/todo-list.jsx"


export function TodoApp() {

    return <section className="todo-index">
        <TodoList />
        <TodoFilter />
    </section>
}