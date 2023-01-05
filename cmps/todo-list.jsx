import { TodoPreview } from "./todo-preview.jsx"


export function TodoList({ todos, onRemoveTodo }) {
    return <section className="todo-list">

        <ul>
            {todos.map(todo => <li key={todo._id}><TodoPreview todo={todo} /><button onClick={() => onRemoveTodo(todo._id)}>X</button></li>)}
        </ul>
    </section>
}