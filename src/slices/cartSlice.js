import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../config";

export const order = createAsyncThunk(
  "cart/order",
  async ({ items: order, total }) => {
    console.log(order);
    const response = await fetch(config.API_URL + "/orders", {
      method: "POST",
      headers: {
        "X-API-KEY": config.API_KEY,
        Accept: "application/json",
      },
      body: JSON.stringify(order),
    });
    const result = await response.json();
    return { ...result, total };
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    orders: [],
  },
  reducers: {
    addToCart: ({ items }, action) => {
      const item = action.payload;
      const index = items.findIndex((product) => product.id === item.id);
      if (index >= 0) {
        items[index].quantity++;
      } else {
        items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: ({ items }, action) => {
      items = items.filter((item) => item.id !== action.payload);
    },
    changeQuantity: ({ items }, action) => {
      const { id, value } = action.payload;
      const item = items.find((item) => item.id === id);
      item.quantity = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(order.fulfilled, ({ items, orders }, action) => {
      orders.push(action.payload);
      items = [];
    });
  },
});

export const { addToCart, changeQuantity, removeFromCart } = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
