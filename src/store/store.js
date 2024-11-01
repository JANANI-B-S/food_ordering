import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import wishlistReducer from "./shopping-cart/wishlistSlice"; 

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    wishlist: wishlistReducer, // Add the wishlist reducer here
  },
  middleware: [thunk, logger], // Move middleware here
});

export default store;

