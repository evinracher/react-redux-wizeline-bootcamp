import React from "react";
import { useSelector } from "react-redux";
import { CartList } from "../components/CartList";
import { selectCart } from "../slices/cartSlice";

export const Cart = () => {
  const { items } = useSelector(selectCart);
  return <CartList items={items}></CartList>;
};
