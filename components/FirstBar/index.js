import * as React from "react";
import styled from "styled-components";


// styles
const FirstBarStyle = styled.div `
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const BarIconContainer = styled.div`
  width: 100%;
  height: 60%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

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

const Account = styled.button`
  width: 100%;
  height: 15%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: #979897;
  :hover{
    p{
      font-size: 16px;
    }
    img{
      width: 65%;
    }
  }
  :focus {
    border: none;
    outline: none;
  }
  img {
    width: 60%;
    height: auto;
  }
  p{
    color: black;
    font-family: "Lato";
    font-weight: 700;
    font-size: 14px;
    margin: 10px;
  }
`;


// markup
const FirstBar = () => {

  return (
    <FirstBarStyle>
      <BarIconContainer>
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
      </BarIconContainer>
      <Account>
        <img src="./images/user.svg" alt="" />
        <p>Cerrar Sesión</p>
      </Account>
    </FirstBarStyle>
  );
};

export default FirstBar;