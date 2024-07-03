import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const messagesApi = createSlice({
  name: "messages",
  initialState,
  reducers: {},
});

export const {} = messagesApi.actions;
export const messagesReducer = messagesApi.reducer;
