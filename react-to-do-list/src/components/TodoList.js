import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList() {
    const [tasks, setTasks] = useState([]);

    const addTasks = task => {
        if(!task.text || /^\s*$/.test(task.text)) {
            return;
        }
        const newTask = [task, ...tasks];

        setTasks(newTask);
        console.log(task, ...tasks);
    };

    return (
        <div>
            <h1>Todays Tasks</h1>
            <TodoForm onSubmit={addTasks} />        
        </div>
    );
}

export default TodoList;
