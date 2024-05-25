import counterSlice from "./CounterSlice";
import togglerSlice from "./TogglerSlice";
import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const counterConfigStore = configureStore({
  reducer: {
    counterNumber: counterSlice.reducer,
    hide: togglerSlice.reducer,
    authen: authSlice.reducer,
  },
});

export const authActions = authSlice.actions;

export default counterConfigStore;
