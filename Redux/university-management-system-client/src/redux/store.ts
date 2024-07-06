import { configureStore } from "@reduxjs/toolkit";
import {
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { IUser } from "../pages/Login";
import baseApi from "./api/baseApi";
import { authReducer } from "./features/auth/authSlice";

const persistConfig = {
  key: "auth",
  storage,
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, REHYDRATE, PURGE],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const accessTokenSelector = (state: RootState) => state.auth.token;

export const userSelector = (state: RootState) => state.auth.user as IUser;
