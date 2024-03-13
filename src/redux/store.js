import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { orderReducer } from "./reducers/cartReducer";
import { authReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});
export default store;

export const server = "https://thefoodapplication.onrender.com/api/v1";
