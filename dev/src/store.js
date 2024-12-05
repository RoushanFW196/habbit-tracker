import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import habitReducer from "./features/habbitSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        habits: habitReducer,
    },
});
