import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterValue: 5 },
  reducers: {
    increment: (currState, action) => {
      currState = currState.counterValue++;
    },
    decrement: (currState, action) => {
      currState = currState.counterValue--;
    },
  },
});

const counterConfigStore = configureStore({
  reducer: {
    counterNumber: counterSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;

export default counterConfigStore;
