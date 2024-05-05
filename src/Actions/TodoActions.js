// src/Actions/TodoActions.js
export const ADD_TASK = "ADD_TASK"; // Action type for adding a task
export const DELETE_TASK = "DELETE_TASK"; // Action type for deleting a task

// Action creator to add a new task
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task, // Payload contains the task object
});

// Action creator to delete a task
export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId, // Payload contains the ID of the task to delete
});
