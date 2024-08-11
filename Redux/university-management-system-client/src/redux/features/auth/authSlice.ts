import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  user: null | object;
  token: null | string;
}

const initialState: IAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    userLoggedOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
