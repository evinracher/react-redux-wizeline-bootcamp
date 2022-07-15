import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../slices/userSlice.js";
import {
  Bar,
  Links,
  FlexContainer,
  LogoutBtn,
} from "../styles/components/Header.styles.js";

export const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Bar className="topnav" id="myTopnav">
      <Links to="/">Wizestore</Links>
      <FlexContainer>
        <Links to="/cart">Cart</Links>
        <Links to="/products">Products</Links>
        <Links to="/orders">Orders</Links>
        {user.username ? (
          <LogoutBtn
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </LogoutBtn>
        ) : (
          <Links to="/login">Login</Links>
        )}
      </FlexContainer>
    </Bar>
  );
};
