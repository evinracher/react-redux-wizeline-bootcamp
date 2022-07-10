import React from "react";
import {
  ProductsContainer,
  ProductCard,
  ProductName,
  ImageContainer,
  AddToCartBtn,
  Tag,
} from "../../styles/components/ProductList.styles";

export const ProductList = ({ products }) => {
  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ImageContainer>
            <img src={product.images[0]} alt={product.name}></img>
          </ImageContainer>
          <ProductName>{product.name}</ProductName>
          <Tag>{product.categories[0]}</Tag>
          <p>${product.price}</p>
          <AddToCartBtn>Add to cart</AddToCartBtn>
        </ProductCard>
      ))}
    </ProductsContainer>
  );
};
