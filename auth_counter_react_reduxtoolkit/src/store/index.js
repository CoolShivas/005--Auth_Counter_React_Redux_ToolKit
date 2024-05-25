import authSlice from "./auth";
import counterSlice from "./CounterSlice";
import togglerSlice from "./TogglerSlice";
import { configureStore } from "@reduxjs/toolkit";

const counterConfigStore = configureStore({
  reducer: {
    counterNumber: counterSlice.reducer,
    hide: togglerSlice.reducer,
    authen: authSlice.reducer,
  },
});

export default counterConfigStore;
