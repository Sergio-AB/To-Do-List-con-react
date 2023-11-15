import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTask}>
        <span class="material-symbols-outlined">&#xe145;</span>
      </button>
    </div>
  );
};

export default AddTaskForm;
