import * as React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar" 

// styles

const HeaderStyle = styled.main`
  background-color: #7cb342;
  box-shadow: 0px 1px 5px 3px rgba(53,53,53,0.47);
  height: 77px;
  position: sticky;
  z-index: 500;
  left: 0;
  padding: 0;
  margin: 0;
  font-family: 'Lato', sans-serif;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MenuContainer = styled.div`
width: 5vw;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const LogosContainer = styled.div`
width: 45vw;
height: 100%;
margin-left: 1vw;
display: flex;
justify-content: flex-start;
`;

const Logos = styled.div`
  width: 100%;
  height: 100%;
  z-index: 6;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img{
    height: auto;
    width: 80%;
    min-width: 350px;
    @media (max-width: 768px) {
  }
  }
`;

const SearchBarContainer = styled.div`
width: 45vw;
margin-left: 2vw;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const UserContainer = styled.div`
width: 5vw;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
img{
  width: 50%;
  height: auto;
}
`;


// markup
const Header = () => {
  return <HeaderStyle>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"/>
    <MenuContainer>
    </MenuContainer>
    <LogosContainer>
    <Logos>
      <img src="./images/Logos.png" alt=""/>
    </Logos>
    </LogosContainer>
    <SearchBarContainer>
      <SearchBar/>
    </SearchBarContainer>
    <UserContainer>
      <img src="./images/user.svg" alt=""/>
    </UserContainer>
  </HeaderStyle>;
};

export default Header;
