// src/Reducers/index.js
import { combineReducers } from "redux";
import todoReducers from "./TodoReducers";

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  todos: todoReducers, // Using 'todos' as the key for todoReducers in the state
});

export default rootReducer;
