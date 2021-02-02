import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0 auto;
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
