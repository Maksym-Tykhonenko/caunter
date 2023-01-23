import { createSlice } from '@reduxjs/toolkit';

export const valueSlise = createSlice({
    name: "myValue",
    initialState: 0,
    reducers: {
        increment(state, action) {
            return state + action.payload;
        },
        decrement(state, action) {
            return state - action.payload;
        }
    }
});
export const { increment, decrement } = valueSlise.actions;