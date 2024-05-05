// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Reducers/TodoReducers';

// Create the Redux store with the todoReducer
const store = configureStore({
  reducer: todoReducer, // Set the root reducer
  devTools: true // Enable Redux DevTools Extension
});

export default store;
