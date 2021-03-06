import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import { useSelector } from "react-redux";
import SearchFilter from "./SerachFilter";
import * as type from "../../redux/types";

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
  @media (max-width: 850px) {
    width: 70%;
    height: 100%;
  }
  @media (max-width: 426px) {
    width: 70%;
    height: 100%;
  }
`;
const SearchBarRightDiv = styled.div`
  width: 20%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 850px) {
    width: 30%;
    height: 100%;
  }
  @media (max-width: 426px) {
    width: 30%;
    height: 100%;
  }
`;

const SearchBarButton = styled.button`
  padding: 0;
  margin: 0;
  width: 95%;
  height: 90%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  background-color: #1e1e1e;
  color: white;
  p {
    margin: 0;
    font-size: 12px;
    @media (max-width: 850px) {
      font-size: 10px;
    }
  }
`;

// markup
//   const { images } = useSelector((state) => state.imagen);
//   const lupaIcon = images.filter((e) => e.nombre === "search")[0];

const SearchBar = () => {
  const dispatch = useDispatch();
  const { buscador } = useSelector(state => state.header);

  const setBuscadorState = arg => {
    dispatch({
      type: type.SET_HEADER_STATE,
      payload: arg,
    });
  };

  return (
    <SearchBarWrapper>
      <SearchBarLeftDiv>
        <SearchFilter />
      </SearchBarLeftDiv>

      <SearchBarRightDiv>
        <SearchBarButton
          onClick={() =>
            buscador == "NOMBRE"
              ? setBuscadorState("CUEANEXO")
              : setBuscadorState("NOMBRE")
          }
        >
          <p>{buscador == "NOMBRE" ? "NOMBRE" : "CUEANEXO"}</p>
        </SearchBarButton>
      </SearchBarRightDiv>
    </SearchBarWrapper>
  );
};

export default SearchBar;
