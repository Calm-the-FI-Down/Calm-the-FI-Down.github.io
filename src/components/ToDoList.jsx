import React, { useState } from 'react';
import TodoItem from './ToDoItem.jsx';

function TodoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Build Small Emergency Fund: Either $1000 or one months\' expenses.',
            completed: false
        },
        {
            id: 2,
            text: 'If your employer offers a 401(k) match, contribute enough to get the full match but nothing above that.',
            completed: false
        },
        {
            id: 3,
            text: 'Pay off all high-interest debt.',
            completed: false
        },
        {
            id: 4,
            text: 'Increase your emergency fund to cover 3-6 months of expenses.',
            completed: false
        },
        {
            id: 5,
            text: 'Pay off any moderate-interest debt. I.e., anything debt over 4-5% interest, excluding mortgage.',
            completed: false
        },
        {
            id: 6,
            text: 'Evaluate whether to contribute to a Roth IRA or Traditional IRA and max out the yearly contributions.',
            completed: false
        },
        {
            id: 7,
            text: 'If you are expected any large expenses in the next 5 years, save for them in a high-yield savings account.',
            completed: false
        },
        {
            id: 8,
            text: 'Increase 15% of your pre-tax income to retirement savings.',
            completed: false
        }
        
    ]);

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
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    toggleCompleted={toggleCompleted}
                />
            ))}
        </div>
    );
}

export default TodoList;
