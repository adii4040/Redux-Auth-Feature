import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // initially not logged in
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // e.g., { username: "Aditya" }
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
