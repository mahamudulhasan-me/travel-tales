import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import { authReducer } from "../features/auth/authSlice";
import { conversationsReducer } from "../features/conversation/conversationsSlice";
import { messagesReducer } from "../features/message/messagesSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
  },

  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(apiSlice.middleware),
});

export default store;
