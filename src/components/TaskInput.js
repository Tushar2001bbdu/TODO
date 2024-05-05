// src/components/TaskInput.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Actions/TodoActions"; // Import action creator for adding tasks

// TaskInput component for adding new tasks
const TaskInput = () => {
  const [inputValue, setInputValue] = useState(""); // State to hold input value
  const dispatch = useDispatch(); // Get the dispatch function from React Redux

  // Handler function to add a new task
  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      const taskId = new Date().getTime(); // Generate a unique ID for the task
      const task = { id: taskId, title: inputValue }; // Create task object with ID
      dispatch(addTask(task)); // Dispatch addTask action with task object
      setInputValue(""); // Clear the input field after adding the task
    }
  };

  // Render the input field and add button
  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
