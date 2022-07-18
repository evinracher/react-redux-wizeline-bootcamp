import styled from "styled-components";

export const CartContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 1rem;
`;

export const CartListContainer = styled.div`
  max-width: 90vw;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const ProductDetails = styled.td`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const ProductImage = styled.img`
  height: 10rem;
`;

export const ProductQuantity = styled.div`
  display: flex;
  gap: 0.5rem;
  input {
    width: 5rem;
    text-align: center;
  }
`;

export const RemoveBtn = styled.button`
  font-weight: bold;
`;

export const Summary = styled.div`
  background-color: rgb(245, 245, 245);
  height: fit-content;
  padding: 1rem;
  min-width: 10rem;
`;

export const Table = styled.table`
  td {
    min-width: 4rem;
    text-align: center;
  }
`;
