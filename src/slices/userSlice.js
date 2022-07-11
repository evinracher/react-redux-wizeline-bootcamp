import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loginApi from "../utils/loginApi";

export const login = createAsyncThunk("user/login", async (user) => {
  const response = await loginApi(user.username, user.password);
  return response;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    logout: () => {
      return {};
    },
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (_, action) => {
      return action.payload;
    });
    builder.addCase(login.rejected, (_, action) => {
      return { error: action.error.message };
    });
  },
});

export const { logout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
