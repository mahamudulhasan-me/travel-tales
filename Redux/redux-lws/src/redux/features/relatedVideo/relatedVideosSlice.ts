/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IVideo } from "../video/videoSlice";
import { getRelatedVideos } from "./relatedVideosAPI";

export interface IInitialState {
  videos: IVideo[];
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const initialState: IInitialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};
// Define the type for the thunk
//@ts-ignore
type FetchVideoThunk = AsyncThunk<any, string, unknown>;

export const fetchRelatedVideos: FetchVideoThunk = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async (query: string) => {
    const videos = await getRelatedVideos(query);
    return videos;
  }
);

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action?.error.message || "Something Went Wrong";
      });
  },
});

export default relatedVideosSlice.reducer;
