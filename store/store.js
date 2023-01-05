const { createStore } = Redux
export const SET_TODOS = 'SET_TODOS'

const initialState = {
    todos: [],
    filterBy: null,
    user: null
    // user: userService.getLoggedinUser()
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        //_TODOS
        case SET_TODOS:
            return { ...state, todos: action.todos }


        default:
            return { ...state }
    }
}

export const store = createStore(appReducer)
store.subscribe(() => {
    console.log('Current state is:', store.getState())
})
