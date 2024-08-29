// src/redux/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import subscribeReducer from "./slices/subscribeSlice";

const rootReducer = combineReducers({
  subscribe: subscribeReducer,
  // Add more slices as needed
});

export default rootReducer;
