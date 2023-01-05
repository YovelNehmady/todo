export function TodoPreview({todo}){
    return <article className="todo-preview">
        <h3>{todo.txt}</h3>
        <small>{todo.createdAt}</small>
    </article>
}