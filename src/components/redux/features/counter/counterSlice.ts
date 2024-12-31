import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});
export const { increment, decrement } = counterReducer.actions;
export default counterReducer.reducer;
