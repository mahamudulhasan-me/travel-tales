import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import postSlice from "./features/post/postSlice";

// const logger = createLogger();
const store = configureStore({
  reducer: {
    counter: counterSlice,
    post: postSlice,
  },
  //   middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
