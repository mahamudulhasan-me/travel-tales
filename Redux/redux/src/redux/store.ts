import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";

// configure store
const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  //   devTools: false,f
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
