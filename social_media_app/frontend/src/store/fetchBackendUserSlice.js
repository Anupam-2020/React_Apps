import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchBackendUserSlice = createSlice({
    name: 'User Data',
    initialState: {
        data: null,
        message: null,
        error: null,
        blogData: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(getSingleUserData.fulfilled, (state, action) => {
            state.data = action.payload
        })
        .addCase(getSingleUserData.rejected, (state, action) => {
            state.data = action.payload;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.message = action.payload;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.error = action.error;
        })
        .addCase(getUserBlogs.fulfilled, (state, action) => {
            state.blogData = action.payload;
        })
    }
});

export const userDataReducer = fetchBackendUserSlice.reducer;

// get user details if present in database...
export const getSingleUserData = createAsyncThunk('get/user', async (loginCredentials, {rejectWithValue}) => {
    try {
        const response = await fetch('http://localhost:5000/api/login', {
            method:'POST',
            body: JSON.stringify({
                email: loginCredentials.email,
                password: loginCredentials.password
            }),
            headers: {'Content-Type': 'application/json'}
        })
        const data = await response.json();
        console.log(data);
        return data;
    } catch(err) {
        rejectWithValue(err);
    }
});

// User registration....
export const registerUser = createAsyncThunk('register/user', async (userData, {rejectWithValue}) => {
    try {
        const response = await fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            body: JSON.stringify({
                name: userData.name,
                email: userData.email,
                password: userData.password
            }),
            headers: {'Content-Type': 'application/json'}
        })
        const result = await response.json();
        console.log(result);
        return result;
    } catch(err) {
        rejectWithValue(err);
    }
});

// get blogs corresponding particular user..
export const getUserBlogs = createAsyncThunk('get blogs', async (userData, {rejectWithValue}) => {
    console.log(userData.data.user._id);
    try {
        const response = await fetch(`http://localhost:5000/api/blog/userId/${userData.data.user._id}`)
        const data = await response.json();
        console.log(data.user.blogs);
        return data.user.blogs;
    } catch(err) {
        rejectWithValue(err);
    }
})
