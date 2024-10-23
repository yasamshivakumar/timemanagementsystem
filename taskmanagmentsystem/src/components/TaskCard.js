
import React from 'react';

const TaskCard = ({ task, fromColumnId, moveTask }) => {
  const handleMoveTask = (toColumnId) => {
    moveTask(task.id, fromColumnId, toColumnId);
  };

  return (
    <div className="task-card">
      <p>{task.name}</p>
      {fromColumnId !== 'todo' && <button onClick={() => handleMoveTask('todo')}>Move to To Do</button>}
      {fromColumnId !== 'in-progress' && <button onClick={() => handleMoveTask('in-progress')}>Move to In Progress</button>}
      {fromColumnId !== 'done' && <button onClick={() => handleMoveTask('done')}>Move to Done</button>}
    </div>
  );
};

export default TaskCard;
