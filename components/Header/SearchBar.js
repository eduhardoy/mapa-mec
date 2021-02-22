import * as React from "react";
import styled from "styled-components";
import useHeaderState from "../../hooks/HeaderState";
// import { useSelector } from "react-redux";
import Filter3 from "./Filter3";

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
  padding: 0;
  margin: 0;
  @media (max-width: 769px) {
    width: 25%;
    height: 100%;
  }
  @media (max-width: 769px) {
    width: 30%;
    height: 100%;
  }
`;

const SearchBarButton = styled.button`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  border: none;
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  color: #e9ecef;
`;

// markup
//   const { images } = useSelector((state) => state.imagen);
//   const lupaIcon = images.filter((e) => e.nombre === "search")[0];

const SearchBar = () => {
  const { buscador, setBuscador } = useHeaderState();

  return (
    <SearchBarWrapper>
      <SearchBarLeftDiv>
        <Filter3 />
      </SearchBarLeftDiv>

      <SearchBarRightDiv>
        <SearchBarButton
          onClick={() =>
            buscador == "NOMBRE"
              ? setBuscador("CUEANEXO")
              : setBuscador("NOMBRE")
          }
        >
          <p>{buscador == "NOMBRE" ? "NOMBRE" : "CUEANEXO"}</p>
        </SearchBarButton>
      </SearchBarRightDiv>
    </SearchBarWrapper>
  );
};

export default SearchBar;
