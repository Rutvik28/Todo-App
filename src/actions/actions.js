export const addTodoAction = input => {
    return {
        type: "ADD_TODO",
        payload: input
    }
}

export const toggleTodoAction = id => {
    return {
        type: "TOGGLE_TODO",
        id
    }
}

export const clearCompletedAction = () => {
    return {
        type: "CLEAR_COMPLETED"
    }
}