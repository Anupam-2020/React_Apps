import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export type StateType = {count: number};
const initialState: StateType = {
    count: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
        decrement(state, action: PayloadAction<number>) {
            state.count -= action.payload
        }
    }
})

export const actions = counterSlice.actions;
export const reducer = counterSlice.reducer;