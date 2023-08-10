import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
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
