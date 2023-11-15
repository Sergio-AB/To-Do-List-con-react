import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isListHidden, setListHidden] = useState(false);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteAllTasks = () => {
    setListHidden(true);
    setTimeout(() => {
      setTasks([]);
      setListHidden(false);
    }, 500); 
  };

  return (
    <div className={`App ${isListHidden ? 'fade-out' : ''}`}>
      <h1>To-Do List</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggleComplete={toggleComplete} />
      {tasks.length > 0 && (
        <button onClick={deleteAllTasks} className="delete-all-button">
          <span className="material-symbols-outlined">&#xe92b;</span>
        </button>
      )}
    </div>
  );
};

export default App;
