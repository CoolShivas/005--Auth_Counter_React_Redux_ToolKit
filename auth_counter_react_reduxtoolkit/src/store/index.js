import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterValue: 0 },
  reducers: {
    increment: (currState, action) => {},
    decrement: (currState, action) => {},
  },
});

const counterConfigStore = configureStore({
  reducer: {
    counterNumber: counterSlice.reducer,
  },
});

export default counterConfigStore;
