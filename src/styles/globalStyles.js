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
  display: flex;
  height: 500px;
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

export default GlobalStyle;
