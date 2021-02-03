import * as React from "react";
import styled from "styled-components";

// styles
const SearchBarWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  width: 60%;
  height: 60%;
  background-color: #fff;
  border: solid 2px #fff;
  border-radius: 5px;
  overflow: hidden;
`;

const SearchBarInput = styled.input`
  padding: 0;
  margin: 0;
  width: 85%;
  padding: 15px;
  background-color: #E9ECEF;
  outline: none;
  border: none;
  font-family: 'Lato', sans-serif;
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
  color: #E9ECEF;
  img {
    width: auto;
    height: 50%;
    color: #E9ECEF;
  }
`;



// markup
const SearchBar = () => {
  return <SearchBarWrapper>
        <SearchBarInput>
        </SearchBarInput>
        <SearchBarButton>
          <img src="./images/search.svg" alt=""/>
        </SearchBarButton>
      </SearchBarWrapper>
};

export default SearchBar;