import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {},
});

export const {} = conversationsSlice.actions;
export const conversationsReducer = conversationsSlice.reducer;
