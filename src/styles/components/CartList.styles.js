import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const CartListContainer = styled.div``;

export const Item = styled.tr`
  td {
    padding: 1rem;
  }
`;

export const ProductDetails = styled.td`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const ProductImage = styled.img`
  height: 10rem;
`;

export const ProductQuantity = styled.td`
  input {
    width: 5rem;
  }
`;
