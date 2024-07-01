import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
  bookType: string;
  searchKey: string;
}

const initialState: IInitialState = {
  bookType: "all",
  searchKey: "",
};

const bookSlice = createSlice({
  name: "booksFilter",
  initialState,
  reducers: {
    selectBookType: (state, action: PayloadAction<string>) => {
      state.bookType = action.payload;
    },
    setSearchKeyword: (state, action: PayloadAction<string>) => {
      state.searchKey = action.payload;
    },
  },
});

export const { reducer: booksFilterReducer, actions } = bookSlice;

export const { selectBookType, setSearchKeyword } = actions;

export default bookSlice;
