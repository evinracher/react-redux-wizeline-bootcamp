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
      localStorage.removeItem("user");
      return {};
    },
    setUser: (_, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (_, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    });
    builder.addCase(login.rejected, (_, action) => {
      return { error: action.error.message };
    });
  },
});

export const { logout, setUser } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
