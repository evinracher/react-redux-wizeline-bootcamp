import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 1.5rem;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
  width: 10%;
  min-width: 20rem;
  max-height: 30rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
  overflow: hidden;
  &:hover {
    box-shadow: 0rem 0rem 0.5rem 0.5rem gray;
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  max-height: 50%;
  img {
    max-width: 90%;
    max-height: 100%;
  }
`;

export const ProductName = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AddToCartBtn = styled.button`
  background-color: rgb(32, 52, 73);
  color: white;
  border: none;
  border-radius: 0.2rem;
  height: 2rem;
  &:hover {
    cursor: pointer;
    font-weight: 700;
  }
`;

export const Tag = styled.span`
  width: fit-content;
  color: white;
  padding: 0.2rem;
  border-radius: 0.2rem;
  background-color: rgb(201, 114, 6);
`;
