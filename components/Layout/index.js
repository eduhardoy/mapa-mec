import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0 auto;
    font-family: 'Lato', sans-serif;
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }

  html {
  height: -webkit-fill-available;
}
`;
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  );
}
