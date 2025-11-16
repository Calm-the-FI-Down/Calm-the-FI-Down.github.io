import React from 'react';
import './Progress.css';

function Progress({ tasks }) {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progressPercentage = (completedTasks / totalTasks) * 100;

    return (
        <div className="progress">
            <div className="progress-bar" style={{ width: `${progressPercentage}%` }} 
                data-text={`${completedTasks} / ${totalTasks} tasks completed`}>
            </div>
        </div>
    );
}

export default Progress;