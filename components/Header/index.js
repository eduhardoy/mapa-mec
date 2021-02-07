import * as React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { selectBar, selectFirstBar } from "../../redux/actions/BarActions";
// styles

const HeaderStyle = styled.main`
  background-color: #7cb342;
  box-shadow: 0px 1px 5px 3px rgba(53, 53, 53, 0.47);
  height: 77px;
  position: sticky;
  z-index: 500;
  left: 0;
  padding: 0;
  margin: 0;
  font-family: "Lato", sans-serif;
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
  width: 50vw;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Logos = styled.div`
  width: 100%;
  height: 100%;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 70%;
    width: auto;
    @media (max-width: 1100px) {
      height: 65%;
    }
    @media (max-width: 1000px) {
      height: 60%;
    }
    @media (max-width: 900px) {
      height: 55%;
    }
  }
`;

const SearchBarContainer = styled.div`
  width: 40vw;
  height: 100%;
  display: flex;
  justify-content: center;
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
  svg {
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
    color: black;
    height: 60%;
    margin: 0;
  }
`;

// markup
const Header = ({ selectFirstBar, firstBar }) => {

  return (
    <HeaderStyle>
      <MenuContainer>
        <IconButtonMenu onClick={() => selectFirstBar()}>
          <MenuIcon />
        </IconButtonMenu>
      </MenuContainer>
      <LogosContainer>
        <Logos>
          <img src="./images/Logos.png" alt="" />
        </Logos>
      </LogosContainer>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <UserContainer>
        <IconButtonUser>
          <AccountCircleIcon />
        </IconButtonUser>
      </UserContainer>
    </HeaderStyle>
  );
};

const mapStateToProps = (state) => ({
  firstBar: state.bar.firstBar,
});

const mapDispatchToProps = (dispatch) => ({
  selectFirstBar: (arg) => dispatch(selectFirstBar(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
