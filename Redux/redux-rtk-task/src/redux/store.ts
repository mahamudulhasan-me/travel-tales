import { configureStore } from "@reduxjs/toolkit";
import videoByTags from "./features/videoByTags";
import videoReducer from "./features/videoSlice";

const store = configureStore({
  reducer: {
    video: videoReducer,
    videoByTags,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
