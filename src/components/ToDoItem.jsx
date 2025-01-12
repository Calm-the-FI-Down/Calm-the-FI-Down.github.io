import React from 'react';

function ToDoItem({task, toggleCompleted }) {
    function handleChange() {
        toggleCompleted(task.id);
    }

    const completedStyle = "bg-green-200 hover:bg-green-300 scale-95";
    const notCompletedStyle = "bg-gray-200 hover:bg-gray-300 ";

    return (
        <li
        className={`${
            task.completed ? completedStyle : notCompletedStyle
        } min-h-28 flex flex-row justify-between items-center gap-4 px-8 py-2 cursor-pointer rounded-md shadow-md my-2`}
        onClick={() => handleChange()}
        >
        <div className="bg-slate-500 text-teal-50 w-8 h-8 flex items-center rounded-full justify-center shadow-md">
            {task.id}
        </div>
        <div className="flex-1 px-8 text-center">
            <h1 className='text-xl font-bold mb-2'>{task.text}</h1>
            {task.details && <p className="text-s">{task.details}</p>}
        </div> 
        <div className="text-2xl">{task.completed ? "✅" : "⬜"}</div>
        </li>
    );
}

export default ToDoItem;
