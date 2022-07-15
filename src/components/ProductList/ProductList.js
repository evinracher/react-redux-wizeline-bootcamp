import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../slices/cartSlice";
import {
  ProductsContainer,
  ProductCard,
  ProductName,
  ImageContainer,
  AddToCartBtn,
  Tag,
} from "../../styles/components/ProductList.styles";

export const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const handleProductInCart = (product) => () => {
    if (product.inCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

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
          <AddToCartBtn onClick={handleProductInCart(product)}>
            {product.inCart ? "Remove from cart" : "Add to cart"}
          </AddToCartBtn>
        </ProductCard>
      ))}
    </ProductsContainer>
  );
};
