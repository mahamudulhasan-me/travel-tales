import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import videoReducer from "../features/videoSlice.mjs";

const store = configureStore({
  reducer: {
    video: videoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
