import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

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

    const updateTask = (taskId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)));
    }

    const removeTodo = id => {
        const removeArr = [...tasks].filter(task => task.id !== id);
        setTasks(removeArr);
    }

    const completeTodo = id => {
        let updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete
            }
            return task;
        })
        setTasks(updatedTasks)
    }

    return (
        <div>
            <h1>Todays Tasks</h1>
            <TodoForm onSubmit={addTasks} />    
            <Todo tasks={tasks} completeTodo={completeTodo} removeTodo={removeTodo} updateTask={updateTask} />    
        </div>
    );
}

export default TodoList;
