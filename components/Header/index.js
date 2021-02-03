import * as React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar" 

// styles

const HeaderStyle = styled.main`
  background-color: #7fb850;
  box-shadow: 0px 1px 5px 3px rgba(53,53,53,0.47);
  border-bottom: 7px solid #67a534;
  height: 70px;
  position: sticky;
  z-index: 5;
  left: 0;
  padding: 0;
  margin: 0;
  font-family: 'Lato', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogosContainer = styled.div`
width: 40%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Logos = styled.div`
  width: 100%;
  height: 100%;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    height: auto;
    width: 90%;
    min-width: 60%;
  }
`;

const SearchBarContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;


// markup
const Header = () => {
  return <HeaderStyle>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"/>
    <LogosContainer>
    <Logos>
      <img src="./images/Logos.png" alt=""/>
    </Logos>
    </LogosContainer>
    <SearchBarContainer>
      <SearchBar/>
    </SearchBarContainer>
  </HeaderStyle>;
};

export default Header;
