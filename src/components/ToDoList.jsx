import React, { useState } from 'react';
import ToDoItem from './ToDoItem.jsx';


function ToDoList() {
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
            text: 'Pay off all high-interest debt. I.e., anything over 10% interest.',
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
            text: 'Evaluate whether to contribute to a Roth IRA or Traditional IRA and max out the yearly contributions. If you are over the income limit for a Roth IRA, consider a backdoor Roth IRA conversion.',
            completed: false
        },
        {
            id: 7,
            text: 'If you are expected any large expenses in the next 5 years, save for them in a high-yield savings account.',
            completed: false
        },
        {
            id: 8,
            text: 'Increase 15% of your pre-tax income to retirement savings, whether to 401(k), 403(b), Individual 401(k), SEP-IRA, or if none of the above are available, a taxable brokerage account.',
            completed: false
        },
        {
            id: 9,
            text: 'If you have access to a Health Savings Account (HSA), max out your contributions.',
            completed: false
        },
        {
            id: 10,
            text: 'If you have children and wish to pay for some or all of their college education, contrubute to a 529 plan or similar option.',
            completed: false
        },
        {
            id: 11,
            text: 'Max out 401(k), 403(b), or other retirement account contributions.',
            completed: false
        },
        {
            id: 12,
            text: 'Consider the Mega Backdoor Roth IRA if your employeer offers that plan.',
            completed: false
        },
        {
            id: 13,
            text: 'Continue to increase your savings rate to a point where you are frugal yet still spending for your values.',
            completed: false
        },
        {
            id: 14,
            text: 'You\'ve successfully achieved the "boring middle"! Now, continue these habits, go enjoy life, and Calm the FI Down.',
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
