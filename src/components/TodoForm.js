import React, {useState, useCallback, useContext} from "react";
import {store} from "../store/store";
import {addTodoAction} from "../actions/actions";

const TodoForm = () => {
    const [input, setInput] = useState('');
    const { dispatch } = useContext(store);

    const handleSubmit = useCallback( e => {
        e.preventDefault();
        dispatch(addTodoAction(input));
        setInput('');
    }, [input, dispatch]);

    const handleChange = useCallback(e => setInput(e.target.value),[]);

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="todo-input"
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="What needs to be done ?"
                autoComplete="off"
            />
            <button className="add-button">Add</button>
        </form>
    );
}

export default TodoForm;

