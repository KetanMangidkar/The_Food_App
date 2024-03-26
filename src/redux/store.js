import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import { orderReducer, ordersReducer } from "./reducers/orderReducer";
import { authReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    orders: ordersReducer,
  },
});
export default store;

export const server = "https://thefoodapplication.onrender.com/api/v1";
