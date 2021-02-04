import * as React from "react";
import styled from "styled-components";


// styles
const FirstBarStyle = styled.div `
  width: 100%;
  height: 60%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const IconButton = styled.button`
  width: 100%;
  height: 10%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover {
    img {
      width: 70%;
    }
  }
  :focus {
    border: none;
    outline: none;
    img {
      width: 70%;
    }
  }
  img {
    width: 50%;
    min-width: 30px;
    height: auto;
    margin: 0;
  }
`;

// markup
const FirstBar = () => {

  return (
    <FirstBarStyle>
        <IconButton>
          <img src="./images/mapa.svg" alt="" />
        </IconButton>
        <IconButton>
          <img src="./images/info.svg" alt="" />
        </IconButton>
        <IconButton>
          <img src="./images/settings.svg" alt="" />
        </IconButton>
        <IconButton>
          <img src="./images/wifi.svg" alt="" />
        </IconButton>
    </FirstBarStyle>
  );
};

export default FirstBar;