import * as React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar" 

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
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
width: 4vw;
min-width: 40px;
max-width: 55px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const LogosContainer = styled.div`
width: 43vw;
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
width: 43vw;
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
position: absolute;
right: 0;
svg{
  width: 70%;
  height: auto;
}
`;

const IconButtonMenu = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover {
    svg {
      width: 90%;
    }
  }
  :focus {
    border: none;
    outline: none;
    svg {
      width: 90%;
    }
  }
  svg {
    width: 80%;
    color: white;
    height: auto;
    margin: 0;
  }
`;

const IconButtonUser = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover {
    svg {
      width: 80%;
    }
  }
  :focus {
    border: none;
    outline: none;
    svg {
      width: 80%;
    }
  }
  svg {
    width: 70%;
    color: black;
    height: auto;
    margin: 0;
  }
`;


// markup
const Header = () => {
  return <HeaderStyle>
    <MenuContainer>
      <IconButtonMenu>
      <MenuIcon/>
      </IconButtonMenu>
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
      <IconButtonUser>
      <AccountCircleIcon/>
      </IconButtonUser>
    </UserContainer>
  </HeaderStyle>;
};

export default Header;
