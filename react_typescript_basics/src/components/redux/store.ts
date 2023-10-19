import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./counterSlice";

export const store = configureStore({
    reducer: reducer
})