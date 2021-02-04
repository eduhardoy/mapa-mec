import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// styles
const SearchBarWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  width: 60%;
  height: 60%;
  background-color: #fff;
  border: solid 1px #337E3C;
  border-radius: 4px;
  overflow: hidden;
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
  width: 15%;
  border: none;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  color: #e9ecef;
  border-left: solid 1px #337E3C;
  img {
    width: auto;
    height: 40%;
    color: #e9ecef;
  }
`;

// markup
const SearchBar = () => {
  const { images } = useSelector((state) => state.imagen);
  const lupaIcon = images.filter((e) => e.nombre === "search")[0]
  console.log("ICON",images)

  return (
    <SearchBarWrapper>
      <SearchBarInput placeholder="Ingresar nombre o CUEANEXO"></SearchBarInput>
      <SearchBarButton>
        <img src='./images/search.svg' alt="" />
      </SearchBarButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;
