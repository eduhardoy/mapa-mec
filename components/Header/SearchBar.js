import * as React from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";

// styles
const SearchBarWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  width: 75%;
  height: 60%;
  background-color: #fff;
  border: solid 1px #337e3c;
  border-radius: 4px;
  overflow: hidden;
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }
  @media (max-width: 769px) {
    width: 95%;
  }
`;

const SearchBarInput = styled.input`
  padding: 0;
  margin: 0;
  width: 85%;
  padding: 15px;
  background-color: #fff;
  outline: none;
  border: none;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
`;

const SearchBarButton = styled.button`
  padding: 0;
  margin: 0;
  width: 20%;
  border: none;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  color: #e9ecef;
  border-left: solid 1px #337e3c;
  svg {
    width: auto;
    height: 50%;
    color: #33691e;
  }
`;

// markup
//   const { images } = useSelector((state) => state.imagen);
//   const lupaIcon = images.filter((e) => e.nombre === "search")[0];

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchBarInput placeholder='Ingresar nombre o CUEANEXO'></SearchBarInput>
      <SearchBarButton>
        <SearchIcon />
      </SearchBarButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;
