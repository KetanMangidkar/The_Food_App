import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import { authReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});
export default store;

export const server = "https://thefoodapplication.onrender.com/api/v1";
