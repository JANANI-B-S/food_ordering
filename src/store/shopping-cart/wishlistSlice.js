import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlistItems: [], // Your initial state for wishlist items
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItemToWishlist: (state, action) => {
      state.wishlistItems.push(action.payload);
    },
    deleteItemFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        item => item.id !== action.payload
      );
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice.reducer;
