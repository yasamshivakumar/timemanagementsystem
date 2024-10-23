
import React, { useState, useEffect } from 'react';
import TaskColumn from './TaskColumn';

const initialColumns = [
  { id: 'todo', name: 'To Do', tasks: [] },
  { id: 'in-progress', name: 'In Progress', tasks: [] },
  { id: 'done', name: 'Done', tasks: [] },
];
// alert(initialColumns,"inital")
const TaskManagementBoard = () => {
  const [columns, setColumns] = useState(() => {
    const savedColumns = localStorage.getItem('columns');
    console.log(savedColumns,"saved")
    return savedColumns ? JSON.parse(savedColumns) : initialColumns;
  });

  const addTask = (columnId, taskName) => {
    const updatedColumns = columns.map(col => {
    
      if (col.id === columnId) {
        return { ...col, tasks: [...col.tasks, { id: Date.now(), name: taskName }] };
      }
      return col;
    });
    setColumns(updatedColumns);
    localStorage.setItem('columns', JSON.stringify(updatedColumns));
    // console.log(updatedColumns,"update")
  };
  

  const moveTask = (taskId, fromColumnId, toColumnId) => {
    const updatedColumns = columns.map(col => {
      if (col.id === fromColumnId) {
        const newTasks = col.tasks.filter(task => task.id !== taskId);
        return { ...col, tasks: newTasks };
      }
      if (col.id === toColumnId) {
        const task = columns.find(c => c.id === fromColumnId).tasks.find(t => t.id === taskId);
        return { ...col, tasks: [...col.tasks, task] };
      }
      return col;
    });
    setColumns(updatedColumns);
    localStorage.setItem('columns', JSON.stringify(updatedColumns));
    // console.log(updatedColumns,"update")
  };

  return (
    <div className="task-board">
      {columns.map(column => (
        <TaskColumn key={column.id} column={column} addTask={addTask} moveTask={moveTask} />
      ))}
    </div>
  );
};

export default TaskManagementBoard;
