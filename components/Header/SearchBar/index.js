import * as React from "react";
import styled from "styled-components";

// styles

const HeaderStyle = styled.main`
  background-color: #7CB342;
  box-shadow: 0px 1px 5px 3px rgba(53,53,53,0.47);
  height: 8vh;
  position: sticky;
  z-index: 5;
  left: 0;
  padding: 0;
  margin: 0;
  font-family: -apple-system, Roboto, sans-serif, serif;
  display: flex;
`;

const LogoCtes = styled.div`
  width: 30%;
  height: auto;
  img{
    width: 100%;
  }
`;

const LogoMec = styled.div`
  width: 30%;
  height: auto;
`;


// markup
const Header = () => {
  return <HeaderStyle>
    <LogoCtes>
      <img src="" alt=""/>
    </LogoCtes>
    <LogoMec>
      <img src="" alt=""/>
    </LogoMec>
  </HeaderStyle>;
};

export default Header;