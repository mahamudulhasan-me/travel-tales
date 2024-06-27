/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideos: AsyncThunk<any, void, {}> = createAsyncThunk(
  "videos/fetchVideos",
  async () => {
    const videos = await getVideos();
    return videos;
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action?.error.message || "Something Went Wrong";
      });
  },
});

export default videoSlice.reducer;
