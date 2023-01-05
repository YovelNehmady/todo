import { SET_FILTER } from "../store/store.js"

const { useSelector, useDispatch } = ReactRedux


export function TodoFilter() {
    const filterBy = useSelector((storeState) => storeState.filterBy)
    const dispatch = useDispatch()

    function onSubmit(ev) {
        ev.preventDefault()
    }
    
    function handleChange({ target }) {
        const { name, value } = target

        dispatch({ type: SET_FILTER, [name]: value  })
    }
    

    return <section className="todo-filter">
        <form onSubmit={onSubmit}>
            <input type="text"
                name="txt"
                id="txt"
                placeholder="Search todo..."
                onChange={handleChange}
                value={filterBy.txt} />

            <select onChange={handleChange} value={filterBy.isDone}
                type="select" name="isDone" id="isDone">
                <option value="">All</option>
                <option value="true">Done</option>
                <option value="false">Active</option>
            </select>
        </form>
    </section>
}