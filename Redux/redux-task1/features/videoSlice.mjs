import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  videos: {},
  error: "",
};

export const fetchVideo = createAsyncThunk("video/fetchVideo", async () => {
  const response = await fetch("http://localhost:9000/videos");
  const video = await response.json();
  return video;
});

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVideo.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.videos = action.payload;
      state.error = "";
    });

    builder.addCase(fetchVideo.rejected, (state, action) => {
      state.loading = false;
      state.videos = {};
      state.error = action.error.message;
    });
  },
});

export default videoSlice.reducer;
