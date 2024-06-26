/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface IPostInitialState {
  loading: boolean;
  posts: IPost[];
  error: string | undefined;
}

const initialState: IPostInitialState = {
  loading: false,
  posts: [],
  error: "",
};

// create async thunk
//@ts-expect-error
export const fetchPosts: AsyncThunk<IPost[], void, unknown> = createAsyncThunk(
  "post/fetchPosts",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const posts = await response.json();
    return posts;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.posts = [];
    });
  },
});

export default postSlice.reducer;
