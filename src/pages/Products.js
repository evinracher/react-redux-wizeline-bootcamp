import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductList } from "../components/ProductList";
import { fetchProducts, selectProducts } from "../slices/productsSlice";

export const Products = () => {
  const { products } = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return <ProductList products={products} />;
};
