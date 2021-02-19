import * as React from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import Filter from "./Filter";
import Filter2 from "./Filter2";

// styles
const SearchBarWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  width: 60%;
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

const SearchBarButton = styled.button`
  padding: 0;
  margin: 0;
  width: 15%;
  max-width: 15%;
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
    height: 30px;
    color: #33691e;
    @media (max-width: 769px) {
      height: 20px;
    }
  }
`;

// markup
//   const { images } = useSelector((state) => state.imagen);
//   const lupaIcon = images.filter((e) => e.nombre === "search")[0];

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <Filter2></Filter2>
      <SearchBarButton>
        <SearchIcon />
      </SearchBarButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;
