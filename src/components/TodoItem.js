import React, {useCallback, useContext} from "react";
import {toggleTodoAction} from "../actions/actions";
import {store} from "../store/store";

const TodoItem = ( {task} ) => {
    const {dispatch} = useContext(store);

    const toggleTodo = useCallback(() => dispatch(toggleTodoAction(task.id)),[task,dispatch]);

    return (
        <div className="todo-item">
            <input
                type={"checkbox"}
                defaultChecked={task.isChecked}
                onChange={toggleTodo}
            />
            <p>{task.content}</p>
        </div>
    );
}

export default TodoItem;