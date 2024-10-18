import { configureStore } from "@reduxjs/toolkit";
import { cartActions } from "./cart-slice";

const store = configureStore({
  reducer: { cart: cartActions.reducer },
});

export default store;
