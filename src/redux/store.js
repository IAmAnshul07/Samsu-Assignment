import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "./reducers/blogReducer";

export const makeStore = () => {
  return configureStore({
    reducer: {
      blog: BlogReducer
    },
  });
};
