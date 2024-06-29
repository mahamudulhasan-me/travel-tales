import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
  tags: string[];
  search: string;
}
const initialState: IInitialState = {
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTags: (state, action: PayloadAction<string>) => {
      state.tags.push(action?.payload);
    },

    removeTags: (state, action: PayloadAction<string>) => {
      const indexToRemove = state.tags.indexOf(action.payload);
      if (indexToRemove > -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action?.payload;
    },
  },
});

export const { setTags, removeTags, setSearch } = filterSlice.actions;
export default filterSlice.reducer;
