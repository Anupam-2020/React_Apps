import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'Login',
    initialState: {
        isRegistered: false,
        isLogin: false
    },
    reducers: {
        isRegistered: (state, action) => {
            state.isRegistered = action.payload;
        },
        isLoggedIn: (state, action) => {
            state.isLogin = action.payload;
        }
    }
})

export const action = loginSlice.actions;
export const loginReducer = loginSlice.reducer;