
import { storageService } from './async-storage.service.js'
import { localStorageService } from './storage.service.js'
import { utilService } from './util.service.js'
// import { userService } from './user.service.js'

const STORAGE_KEY = 'todoDB'
_createTodos()

export const todoService = {
    query,
    getById,
    save,
    remove,
    getEmptyTodo,
    getEmptyFilter
}


function query() {
    return storageService.query(STORAGE_KEY)
}
function getById(todoId) {
    return storageService.get(STORAGE_KEY, todoId)
}
function remove(todoId) {
    return storageService.remove(STORAGE_KEY, todoId)
}
function save(todo) {
    if (todo._id) {
        return storageService.put(STORAGE_KEY, todo)
    } else {
        // when switching to backend - remove the next line
        // todo.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, todo)
    }
}

function getEmptyTodo() {
    return {
        txt: '', isDone: false, createdAt: Date.now()
    }
}

function getEmptyFilter() {
    return { txt: '', isDone: '' }
}

function _createTodo() {
    return { txt: utilService.makeLorem(5), isDone: false, createdAt: Date.now() }
}

function _createTodos() {
    let todos = localStorageService.loadFromStorage(STORAGE_KEY)
    if (!todos || !todos.length) {
        todos = []
        todos.push(_createTodo())
        todos.push(_createTodo())
        todos.push(_createTodo())
        todos.push(_createTodo())
        todos.push(_createTodo())
        todos.push(_createTodo())
        todos.forEach(todo => todo._id = utilService.makeId())
        localStorageService.saveToStorage(STORAGE_KEY, todos)
    }
    return todos
}

