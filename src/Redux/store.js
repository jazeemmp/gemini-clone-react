import { configureStore } from "@reduxjs/toolkit";
import geminiReducer from "./gemini";

export const store = configureStore({
  reducer: {
    gemini: geminiReducer,
  },
});
