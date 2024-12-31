import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});
export const { increment, decrement } = counterReducer.actions;
export default counterReducer.reducer;
