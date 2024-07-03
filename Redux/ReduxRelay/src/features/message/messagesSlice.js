import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
});

export const {} = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;
