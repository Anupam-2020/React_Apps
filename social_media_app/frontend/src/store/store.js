import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from './logingSlice';
import { userDataReducer } from './fetchBackendUserSlice';

const store = configureStore({
    reducer: {
        checkLogin: loginReducer,
        userData: userDataReducer
    }
})

export default store;