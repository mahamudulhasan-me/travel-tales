/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsAPI";

export interface ITags {
  id: number;
  title: string;
}
export interface IInitialState {
  tags: ITags[];
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const initialState: IInitialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchTags: AsyncThunk<any, void, {}> = createAsyncThunk(
  "tags/fetchTags",
  async () => {
    const tags = await getTags();
    return tags;
  }
);

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError = true;
        state.error = action?.error.message || "Something Went Wrong";
      });
  },
});

export default tagsSlice.reducer;
