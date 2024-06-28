/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AsyncThunk,
  SerializedError,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { getVideo } from "./videoAPI"; // Adjust the import path as necessary

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
  video: IVideo;
  isLoading: boolean;
  isError: boolean;
  error: string;
}
const initialVideo: IVideo = {
  id: 0,
  title: "",
  description: "",
  author: "",
  avatar: "",
  date: "",
  duration: "",
  views: "",
  link: "",
  thumbnail: "",
  tags: [],
  likes: 0,
  unlikes: 0,
};
const initialState: IInitialState = {
  video: initialVideo,
  isLoading: false,
  isError: false,
  error: "",
};

// Define the type for the thunk
//@ts-ignore
type FetchVideoThunk = AsyncThunk<any, string, unknown>;

export const fetchVideo: FetchVideoThunk = createAsyncThunk(
  "video/fetchVideo",
  async (videoId: string) => {
    const video = await getVideo(videoId);
    return video;
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.video = initialVideo;
        state.isError = true;
        state.error =
          (action.error as SerializedError).message || "Something went wrong";
      });
  },
});

export default videoSlice.reducer;
