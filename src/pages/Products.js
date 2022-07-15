import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductList } from "../components/ProductList";
import { fetchProducts, selectProducts } from "../slices/productsSlice";
import { selectCart } from "../slices/cartSlice";

export const Products = () => {
  const { products } = useSelector(selectProducts);
  const { items } = useSelector(selectCart);
  const itemsIds = items.map((item) => item.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <ProductList
      products={products.map((product) =>
        itemsIds.includes(product.id) ? { ...product, inCart: true } : product
      )}
    />
  );
};
