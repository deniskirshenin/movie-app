import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100vh;
    background-color: #0b0c0f;
  }

  body,
  html {
    margin: 0;
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;
