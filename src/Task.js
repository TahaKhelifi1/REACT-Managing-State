import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from './action';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleToggle = () => dispatch(toggleTask(task.id));
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleEdit = () => {
    const newDescription = prompt('Edit task description:', task.description);
    if (newDescription) {
      dispatch(editTask(task.id, newDescription));
    }
  };

  return (
    <div style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
      <p>{task.description}</p>
      <button onClick={handleToggle}>{task.isDone ? 'Undo' : 'Complete'}</button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
