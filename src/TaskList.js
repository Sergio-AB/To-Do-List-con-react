import React from 'react';

const TaskList = ({ tasks, onDelete, onToggleComplete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
          />
          <span>{task.title}</span>
          <button onClick={() => onDelete(task.id)}>
            <span className="material-symbols-outlined">&#xe15c;</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
