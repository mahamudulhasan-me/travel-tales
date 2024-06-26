import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  videos: [],
  error: "",
};

const getVideoByTags = createAsyncThunk(
  "video/getVideoByTags",
  async (searchParams) => {
    const response = await fetch(
      `http://localhost:9000/videos?${searchParams}`
    );
    const videos = await response.json();
    return videos;
  }
);

const videoByTagsSlice = createSlice({
  name: "videoByTags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVideoByTags.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getVideoByTags.fulfilled, (state, action) => {
      state.loading = false;
      state.videos = action.payload;
      state.error = "";
    });
    builder.addCase(getVideoByTags.rejected, (state, action) => {
      state.loading = false;
      state.videos = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default videoByTagsSlice.reducer;
export { getVideoByTags as getVideoByFeatures };
