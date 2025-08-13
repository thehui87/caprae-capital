import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counterSlice";
import authReducer from "./authSlice";
import buyerReducer from "./buyerSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    buyer: buyerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
