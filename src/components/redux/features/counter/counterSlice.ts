import { createSlice } from "@reduxjs/toolkit";
const initialState = 0;
const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});
export default counterReducer.reducer;
