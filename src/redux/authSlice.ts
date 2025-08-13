// authSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  loggedIn: boolean;
  email: string;
}

const initialState: AuthState = {
  loggedIn: localStorage.getItem("isLoggedIn") === "true",
  email: localStorage.getItem("email") || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<{ email: string }>) {
      state.loggedIn = true;
      state.email = action.payload.email;
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("email", action.payload.email);
    },
    logOut(state) {
      state.loggedIn = false;
      state.email = "";
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("email");
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
