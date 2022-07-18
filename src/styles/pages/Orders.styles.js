import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Table = styled.table`
  th {
    text-align: start;
  }
  td {
    padding: 0.5rem 0.5rem 0.5rem 0rem;
  }
  @media (min-width: 600px) {
    width: 50%;
  }
`;
