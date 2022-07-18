import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from "../config";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(config.API_URL + "/products", {
      headers: {
        "X-API-KEY": config.API_KEY,
        Accept: "application/json",
      },
    });
    const result = await response.json();
    return result;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    fetchProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (_, action) => {
      const { items: products } = action.payload;
      return { products };
    });
  },
});

export const selectProducts = (state) => state.products;

export default productsSlice.reducer;
