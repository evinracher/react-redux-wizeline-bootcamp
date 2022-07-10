import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductList } from "../components/ProductList";
import { getProducts } from "../services/products";
import { fetchProducts, selectProducts } from "../slices/productsSlice";

export const Products = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts().then((data) => dispatch(fetchProducts(data)));
  });
  return <ProductList products={products} />;
};
