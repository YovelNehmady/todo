import { TodoPreview } from "./todo-preview.jsx"


export function TodoList({ todos }) {
    return <section className="todo-list">
        
        <ul>

            {todos.map(todo => <li key={todo._id}><TodoPreview todo={todo} /></li>)}
        </ul>
    </section>
}