import { configureStore, createSlice, current } from "@reduxjs/toolkit";

const togglerSlice = createSlice({
  name: "toggling",
  initialState: false,
  reducers: {
    toggulous: (currState, action) => {
      return (currState = !currState);
    },
  },
});

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
    hide: togglerSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const togglerActions = togglerSlice.actions;

export default counterConfigStore;
