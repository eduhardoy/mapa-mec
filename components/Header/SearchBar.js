import * as React from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";
import Filter from "./Filter";

// styles
const SearchBarWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60%;
  background-color: #fff;
  border: solid 1px #337e3c;
  border-radius: 4px;
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }
  @media (max-width: 769px) {
    width: 100%;
  }
`;

const SearchBarLeftDiv = styled.div`
  width: 80%;
  height: 100%;
  @media (max-width: 769px) {
    width: 85%;
    height: 100%;
  }
`;
const SearchBarRightDiv = styled.div`
  width: 20%;
  height: 100%;
  @media (max-width: 769px) {
    width: 15%;
    height: 100%;
  }
`;

const SearchBarButton = styled.button`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
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
      <SearchBarLeftDiv>
        <Filter />
      </SearchBarLeftDiv>

      <SearchBarRightDiv>
        <SearchBarButton>Nombre</SearchBarButton>
      </SearchBarRightDiv>
    </SearchBarWrapper>
  );
};

export default SearchBar;
