/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IInitialVideoState {
  loading: boolean;
  video: unknown;
  error: string;
}

const initialState: IInitialVideoState = {
  loading: false,
  video: {},
  error: "",
};

export const getVideo = createAsyncThunk("video/getVideo", async () => {
  const response = await fetch("http://localhost:9000/videos");
  const video = await response.json();
  return video;
});

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getVideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.video = action.payload;
      state.error = "";
    });
    builder.addCase(getVideo.rejected, (state, action) => {
      state.loading = false;
      state.video = {};
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default videoSlice.reducer;
