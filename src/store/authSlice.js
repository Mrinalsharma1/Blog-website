import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: false,
    username: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.username = action.payload.username;
        },
        logout: (state, action) => {
            state.status = false;
            state.username = null;
        }
    }

})

export const { login, logout } = authSlice.actions
export default authSlice.reducer