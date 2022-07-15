import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: ({ items }, action) => {
      const item = action.payload;
      const index = items.findIndex((product) => product.id === item.id);
      console.log(index);
      if (index >= 0) {
        items[index].quantity++;
      } else {
        items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: ({ items }, action) => {
      return { items: items.filter((item) => item.id !== action.payload) };
    },
    changeQuantity: ({ items }, action) => {
      const { id, value } = action.payload;
      const item = items.find((item) => item.id === id);
      item.quantity = value;
    },
  },
});

export const { addToCart, changeQuantity, removeFromCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.items;

export default cartSlice.reducer;
