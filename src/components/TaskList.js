// src/components/TaskList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../Actions/TodoActions"; // Import action creator for deleting tasks

// TaskList component to display the list of tasks
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Get tasks from the Redux store state
  const dispatch = useDispatch(); // Get the dispatch function from React Redux

  // Handler function to delete a task
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatch deleteTask action with task ID
  };

  // Render the list of tasks
  return (
    <div className="container">
      <h2 className="mt-3">Task List</h2>
      <div className="task-list">
        <ul className="list-group mt-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{task.title}</span>
              <button
                className="btn btn-info btn-sm"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
