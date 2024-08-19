import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  submitted: false,
};

const utils = createSlice({
  name: "utils",
  initialState,
  reducers: {
    isSubmitted: (state, action: PayloadAction<boolean>) => {
      state.submitted = action.payload;
    },
  },
});

export const { isSubmitted } = utils.actions;

export default utils;
