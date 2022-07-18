import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../config";

export const order = createAsyncThunk(
  "cart/order",
  async ({ items: order, total }) => {
    const response = await fetch(config.API_URL + "/orders", {
      method: "POST",
      headers: {
        "X-API-KEY": config.API_KEY,
        Accept: "application/json",
      },
      body: JSON.stringify(order),
    });
    const result = await response.json();
    const date = new Date().toISOString();
    return { ...result, total, date };
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    orders: [],
  },
  reducers: {
    setOrders: (state, action) => {
      return { ...state, orders: action.payload };
    },
    addToCart: ({ items }, action) => {
      const item = action.payload;
      const index = items.findIndex((product) => product.id === item.id);
      if (index >= 0) {
        items[index].quantity++;
      } else {
        items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    changeQuantity: ({ items }, action) => {
      const { id, value } = action.payload;
      const item = items.find((item) => item.id === id);
      item.quantity = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(order.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(order.fulfilled, (state, action) => {
      state.orders.push(action.payload);
      state.items = [];
      state.loading = false;
      localStorage.setItem("orders", JSON.stringify(state.orders));
    });
  },
});

export const { addToCart, changeQuantity, removeFromCart, setOrders } =
  cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
