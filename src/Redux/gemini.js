import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import run from "../Config/gemini";
const initialState = {
  recentPromts: [],
};
const geminiSlice = createSlice({
  name: "gemini",
  initialState,
  reducers: {
    setRecentPrompts: (state, action) => {
      state.recentPromts.push(action.payload);
    },
  },
});
export const { setRecentPrompts } = geminiSlice.actions;
export default geminiSlice.reducer;
