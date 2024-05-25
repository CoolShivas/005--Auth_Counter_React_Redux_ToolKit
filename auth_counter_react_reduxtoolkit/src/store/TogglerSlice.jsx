import { createSlice } from "@reduxjs/toolkit";

const togglerSlice = createSlice({
    name: "toggling",
    initialState: false,
    reducers: {
        toggulous: (currState, action) => {
            return (currState = !currState);
        },
    },
});

export const togglerActions = togglerSlice.actions;

export default togglerSlice;
