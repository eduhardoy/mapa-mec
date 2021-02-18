import * as React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar.js";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { selectBar, selectFirstBar } from "../../redux/actions/BarActions";
// styles

const HeaderStyle = styled.div`
  width: 100vw;
  background-color: #7cb342;
  box-shadow: 0px 1px 5px 3px rgba(53, 53, 53, 0.47);
  height: 77px;
  position: sticky;
  z-index: 500;
  top: 0;
  padding: 0;
  margin: 0;
  font-family: "Lato", sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 426px) {
    height: 127px;
  }
`;

const NormalHeader = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media (max-width: 426px) {
    height: 50%;
  }
`;

const PhoneLogo = styled.div`
  display: none;
  @media (max-width: 426px) {
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
    }
  }
`;

const MenuContainer = styled.div`
  width: 5vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 426px) {
    width: 50px;
  }
`;

const MiddleContainer = styled.div`
  width: calc(90% - 5vw);
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 426px) {
    width: calc(100% - 100px);
    justify-content: center !important;
  }
`;

const SearchBarContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logos = styled.div`
  width: 40%;
  height: 100%;
  z-index: 6;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    height: auto;
    width: 80%;
    margin-left: 10px;
  }
  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 426px) {
    display: none;
    width: 0;
  }
`;

const UserContainer = styled.div`
  width: 5%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  svg {
    width: 70%;
    height: auto;
  }
  @media (max-width: 426px) {
    height: 50%;
    width: 50px;
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
  :focus {
    border: none;
    outline: none;
  }
  svg {
    width: auto;
    color: white;
    height: 50%;
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
  :focus {
    border: none;
    outline: none;
  }
  svg {
    width: auto;
    color: #fff;
    height: 50%;
    margin: 0;
  }
`;

// markup
const Header = ({ selectFirstBar, firstBar }) => {
  return (
    <HeaderStyle>
      <PhoneLogo>
        <img src='./images/Logos.png' alt='' />
      </PhoneLogo>
      <NormalHeader>
        <MenuContainer>
          <IconButtonMenu onClick={() => selectFirstBar()}>
            <MenuIcon />
          </IconButtonMenu>
        </MenuContainer>
        <MiddleContainer>
          <Logos>
            <img src='./images/Logos.png' alt='' />
          </Logos>
          <SearchBarContainer>
            <SearchBar />
          </SearchBarContainer>
        </MiddleContainer>
        <UserContainer>
          <IconButtonUser>
            <AccountCircleIcon />
          </IconButtonUser>
        </UserContainer>
      </NormalHeader>
    </HeaderStyle>
  );
};

const mapStateToProps = state => ({
  firstBar: state.bar.firstBar,
});

const mapDispatchToProps = dispatch => ({
  selectFirstBar: arg => dispatch(selectFirstBar(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
