import React, {useCallback, useContext, useEffect} from "react";
import TodoItem from "./TodoItem";
import {store} from "../store/store";

const ShowTasks = ({currentButton}) => {
    const { tasks } = useContext(store).state;

    useEffect(() => {
        let obj = document.getElementById("show-tasks");
        obj.scrollTop = obj.scrollHeight;
    },[tasks.length]);

    const giveFilteredTasks =  useCallback(() =>
            tasks.filter(task => (
                (currentButton === 'all') ||
                (currentButton === 'active' && !task.isChecked) ||
                (currentButton === "completed" && task.isChecked)
            ))
        ,[tasks,currentButton]);

    return (
        <div id="show-tasks">
            {giveFilteredTasks().map(task => <TodoItem key={task.id} task={task}/>)}
        </div>
    )
}

export default ShowTasks;