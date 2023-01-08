const { useSelector, useDispatch } = ReactRedux
const { useState, useEffect } = React

import { todoService } from "../services/todo.service.js"
import { SET_FILTER, SET_FILTER_BY_ISDONE, SET_FILTER_BY_TXT } from "../store/store.js"

export function TodoFilter() {

    const [filter, setFilter] = useState(todoService.getEmptyFilter())
    const dispatch = useDispatch()

    function onSubmit(ev) {
        ev.preventDefault()
        dispatch({ type: SET_FILTER, filterBy: filter })
        setFilter(todoService.getEmptyFilter())
    }
    
    function handleChange({ target }) {
        const { name, value } = target
        setFilter((prevFulter) => { return { ...prevFulter, [name]: value } })
        dispatch({ type: SET_FILTER, filterBy: filter })
    }

    return <section className="todo-filter">
        <form onSubmit={onSubmit}>
            <input type="text"
                name="txt"
                id="txt"
                placeholder="Search todo..."
                onChange={handleChange}
                value={filter.txt} />

            <select onChange={handleChange} value={filter.isDone}
                type="select" name="isDone" id="isDone">
                <option value="undefined">All</option>
                <option value="true">Done</option>
                <option value="false">Active</option>
            </select>

            <button hidden>Search</button>
        </form>
    </section>
}