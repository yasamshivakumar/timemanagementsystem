
import React, { useState } from 'react';
import TaskCard from './TaskCard';

const TaskColumn = ({ column, addTask, moveTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.trim()) {
      addTask(column.id, taskName);
      setTaskName('');
    }
  };

  return (
    <div className="task-column">
      <h2>{column.name}</h2>  
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-list">
        {column.tasks.map(task => (
          <TaskCard key={task.id} task={task} fromColumnId={column.id} moveTask={moveTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
