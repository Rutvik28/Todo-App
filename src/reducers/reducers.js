const generateNewId = require('uuid/v4');

export const initialState = {
    tasks: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TODO":
            return {
                ...state,
                tasks: [...state.tasks , {content: action.payload, isChecked: false, id: generateNewId()}]
            }
        case "TOGGLE_TODO":
            return {
                ...state,
                tasks: state.tasks.map(task => (task.id === action.id ? {...task, isChecked: !task.isChecked} : task))
            }
        case "CLEAR_COMPLETED":
            return {
                ...state,
                tasks: state.tasks.filter(task => !task.isChecked)
            }
        default: return state;
    }
}

export default reducer;