import { createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUE = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "Authentication",
  initialState: INITIAL_VALUE,
  reducers: {
    logIn: (currState, action) => {
      currState.isAuthenticated = true;
    },
    logOut: (currState, action) => {
      currState.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
