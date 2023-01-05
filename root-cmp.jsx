const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { TodoApp } from "./views/todo-app.jsx"
import { TodoDetails } from "./views/todo-details.jsx"
import { TodoEdit } from "./views/todo-edit.jsx"



export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/todo" element={<TodoApp />} />

                <Route path="/todo/edit/:todoId" element={<TodoEdit />} />
                <Route path="/todo/details/:todoId" element={<TodoDetails />} />
            </Routes>
        </section>
    </Router>
}
