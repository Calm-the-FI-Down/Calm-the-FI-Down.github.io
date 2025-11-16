import React, { useState } from 'react';
import ToDoItem from './ToDoItem.jsx';
import Progress from './Progress.jsx';



function ToDoList({checklistContent}) {
    const [tasks, setTasks] = useState(checklistContent);

    const [text, setText] = useState('');


    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    }

    return (
        
        <div className="todo-list">
            {/* <Progress tasks={tasks} /> */}
            {tasks.map(task => (
                <ToDoItem
                    key={task.id}
                    task={task}
                    toggleCompleted={toggleCompleted}
                />
            ))}
        </div>
    );
}

export default ToDoList;