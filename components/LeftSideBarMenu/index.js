import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateMarcadores } from "../../redux/actions/MarcadoresActions";
import Filtros from "../Filtros";

// styles

const LeftSideBarMenuStyle = styled.main`
  background-color: #fff;
  border-right: solid #d3d3d3 2px;
  height: calc(100vh - 77px);
  width: 4vw;
  min-width: 50px;
  position: sticky;
  z-index: 4;
  bottom: 0;
  margin: 0;
  padding: 0;
  opacity: 90%;
  font-family: -apple-system, Roboto, sans-serif, serif;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

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
      width: 80%;
    }
  }
  :focus {
    border: none;
    outline: none;
    img {
      width: 80%;
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
  height: 8%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: #979897;
  :hover {
    img {
      width: 85%;
    }
  }
  :focus {
    border: none;
    outline: none;
    img {
      width: 85%;
    }
  }
  img {
    width: 80%;
    height: auto;
  }
`;

// markup
const LeftSideBarMenu = () => {

  return (
    <LeftSideBarMenuStyle>
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
      </Account>
      <Filtros />
    </LeftSideBarMenuStyle>
  );
};

export default LeftSideBarMenu;
