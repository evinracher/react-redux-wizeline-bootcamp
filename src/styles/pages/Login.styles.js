import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 3rem;
  background-color: rgb(245, 245, 245);
`;

export const Input = styled.input`
  line-height: 1.5;
  padding: 0.5rem;
`;

export const Error = styled.p`
  color: red;
`;
