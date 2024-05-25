import { createSlice } from "@reduxjs/toolkit";

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

export const counterActions = counterSlice.actions;

export default counterSlice;
