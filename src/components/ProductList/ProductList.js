import React from "react";

export const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <p>{product.name}</p>
      ))}
    </div>
  );
};
