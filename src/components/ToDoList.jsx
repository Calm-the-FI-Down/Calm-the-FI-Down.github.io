import React, { useState } from 'react';
import ToDoItem from './ToDoItem.jsx';


function ToDoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Build a small Emergency Fund.',
            details: 'Either $1000 or one months\' expenses.',
            completed: false
        },
        {
            id: 2,
            text: 'Contribute enough to your 401(k) to get the full company match but nothing above that.',
            details: 'If your employer offers a retirement match to a 401(k), 403(b), or similar.',
            completed: false
        },
        {
            id: 3,
            text: 'Pay off all high-interest debt.',
            details: 'I.e., anything over 10% interest.',
            completed: false
        },
        {
            id: 4,
            text: 'Increase your emergency fund to cover 3-6 months of expenses.',
            details: '',
            completed: false
        },
        {
            id: 5,
            text: 'Pay off any moderate-interest debt.',
            details: 'I.e., any debt over 4-5% interest, excluding mortgage.',
            completed: false
        },
        {
            id: 6,
            text: 'Max out the yearly contributions for your IRA or Roth IRA.',
            details: 'Consider the tax implications when choosing between an IRA or Roth IRA. If you are over the income limit for a Roth IRA, consider a backdoor Roth IRA conversion.',
            completed: false
        },
        {
            id: 7,
            text: 'Save for any large expected expenses in the next 5 years in a high-yield savings account.',
            details: '',
            completed: false
        },
        {
            id: 8,
            text: 'Increase to 15% of your pre-tax income towards retirement savings.',
            details: 'Contribute to your 401(k), 403(b), Individual 401(k), SEP-IRA, or if none of the above are available, a taxable brokerage account.',
            completed: false
        },
        {
            id: 9,
            text: 'Max out your contributions to a Health Savings Account (HSA).',
            details: 'HSAs offer triple tax benefits, but not all employers offer the high deductible health plan needed.',
            completed: false
        },
        {
            id: 10,
            text: 'Contribute to a 529 plan or similar option.',
            details: 'If you plan to support your child with paying for education, research your state\'s plans.',
            completed: false
        },
        {
            id: 11,
            text: 'Max out 401(k), 403(b), or other retirement account contributions.',
            details: '',
            completed: false
        },
        {
            id: 12,
            text: 'Consider the Mega Backdoor Roth IRA through your employer\'s retirement plan.',
            details: 'Note: Not all employers offer this option.',
            completed: false
        },
        {
            id: 13,
            text: 'Continue to increase your savings rate to a point where you are frugal yet still spending for your values.',
            details: '',
            completed: false
        },
        {
            id: 14,
            text: 'You\'ve successfully achieved the "boring middle"! Now, continue these habits, go enjoy life, and Calm the FI Down.',
            details: '',
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