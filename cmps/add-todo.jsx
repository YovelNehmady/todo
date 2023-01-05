import { todoService } from "../services/todo.service.js"

const { useState } = React

export function AddTodo({ onAddTodo }) {
    const [todo, setTodo] = useState(todoService.getEmptyTodo())

    function onSubmit(ev) {
        ev.preventDefault()
        onAddTodo(todo)
        setTodo(todoService.getEmptyTodo())
    }

    function handleChange ({ target }) {
        const { name, value } = target
        setTodo((prevTodo) => { return { ...prevTodo, [name]: value } })
    }

    return <section className="add-todo">
        <form onSubmit={onSubmit}>
            <input type="text"
                name="txt"
                id="txt"
                placeholder="Enter yout Todo..."
                onChange={handleChange}
                value={todo.txt} />
            <button>Save</button>
        </form>
    </section>
}