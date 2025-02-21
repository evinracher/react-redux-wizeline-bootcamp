import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const Main = styled.div`
  box-sizing: border-box;
  display: flex;
  min-height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  height: 2rem;
  background-color: rgb(32, 52, 73);
  color: white;
  cursor: pointer;
`;

export const Item = styled.tr`
  td {
    padding: 1rem;
  }
`;

export default GlobalStyle;
