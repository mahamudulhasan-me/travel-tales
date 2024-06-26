import { createSlice } from "@reduxjs/toolkit";

export interface ICounterState {
  value: number;
}

const initialState: ICounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    INCREMENT: (state) => {
      state.value++;
    },
    DECREMENT: (state) => {
      state.value--;
    },
    INCREMENTBYCOUNT: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { INCREMENT, DECREMENT, INCREMENTBYCOUNT } = counterSlice.actions;

export default counterSlice.reducer;
