// src/Reducers/TodoReducers.js
import { ADD_TASK, DELETE_TASK } from "../Actions/TodoActions";

// Initialize tasks from local storage, or an empty array if local storage is empty
const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

// Reducer function to manage tasks state
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      // Add a new task to the tasks array
      const newTasksAdd = [...state.tasks, action.payload];
      // Update local storage with the updated tasks array
      localStorage.setItem("tasks", JSON.stringify(newTasksAdd));
      // Return the updated state with the new tasks array
      return {
        ...state,
        tasks: newTasksAdd,
      };
    case DELETE_TASK:
      // Remove a task from the tasks array based on its ID
      const newTasksDelete = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      // Update local storage with the updated tasks array
      localStorage.setItem("tasks", JSON.stringify(newTasksDelete));
      // Return the updated state with the new tasks array
      return {
        ...state,
        tasks: newTasksDelete,
      };
    default:
      // Return the current state if the action type is unknown
      return state;
  }
};

export default todoReducer;
