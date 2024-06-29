/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AsyncThunk,
  SerializedError,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";

export interface IVideo {
  id: number;
  title: string;
  description: string;
  author: string;
  avatar: string;
  date: string;
  duration: string;
  views: string;
  link: string;
  thumbnail: string;
  tags: string[];
  likes: number;
  unlikes: number;
}

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
type FetchVideosThunk = AsyncThunk<
  IVideo[],
  { tags: string[]; search: string },
  {}
>;

export const fetchVideos: FetchVideosThunk = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags, search }: { tags: string[]; search: string }) => {
    const videos = await getVideos(tags, search);
    return videos;
  }
);

const videosSlice = createSlice({
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
        state.error =
          (action.error as SerializedError).message || "Something Went Wrong";
      });
  },
});

export default videosSlice.reducer;
