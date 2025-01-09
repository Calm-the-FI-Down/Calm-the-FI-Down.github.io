import React from 'react';


function TodoItem({task, toggleCompleted }) {

    const completedStyle = "bg-green-200";
    const incompleteStyle = "bg-grey-200";

    function handleChange() {
        toggleCompleted(task.id);
    }

    return (
        <li className="todo-item">
            <input 
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
            />
            <div>{task.text}</div>
            {/* <div>{task.text}</div> <div>{task.completed ? emoji.getUnicode("check_mark_button") : emoji.getUnicode("white_medium_square")}</div> */}
        </li>
    );
}

export default TodoItem;
