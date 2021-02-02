import * as React from "react";
import styled from "styled-components";

// styles

const HeaderStyle = styled.main`
  background-color: #7CB342;
  box-shadow: 0px 1px 5px 3px rgba(53,53,53,0.47);
  height: 80px;
  min-height: 80px;
  position: sticky;
  z-index: 5;
  left: 0;
  padding: 0;
  margin: 0;
  font-family: -apple-system, Roboto, sans-serif, serif;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LogosContainer = styled.div`
width: 40%;
height: 100%;
margin-left: 5vw;
display: flex;
justify-content: center;
align-items: center;
`;

const Logos = styled.div`
  width: 100%;
  height: 100%;
  z-index: 6;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img{
    height: 75%;
    width: auto;
  }
`;

const LogoMec = styled.div`
  width: 15%;
  height: 100%;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    height: 70%;
    width: auto;
  }
`;


// markup
const Header = () => {
  return <HeaderStyle>
    <LogosContainer>
    <Logos>
      <img src="./images/Logos.png" alt=""/>
    </Logos>
    </LogosContainer>
  </HeaderStyle>;
};

export default Header;
