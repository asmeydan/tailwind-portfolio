import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";
import navbarReducer from "../features/navbar/navbarSlice";



export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        navbar: navbarReducer,
    }
})