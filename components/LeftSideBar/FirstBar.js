import * as React from "react";
import styled from "styled-components";
import TuneIcon from "@material-ui/icons/Tune";
import InfoIcon from "@material-ui/icons/Info";
import SettingsIcon from "@material-ui/icons/Settings";
import SchoolIcon from '@material-ui/icons/School';
import BarChartIcon from "@material-ui/icons/BarChart";
import useBars from "../../hooks/Bars";

// styles
const FirstBarContainer = styled.div`
  background-color: #fff;
  /* border-right: solid #d3d3d3 2px; */
  height: calc(100vh - 77px);
  width: 70px;
  z-index: 10;
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  box-shadow: 1px 0px 5px 1px rgba(53, 53, 53, 0.25);
  :hover {
    width: 230px;
    max-width: none;
    div {
      ul {
        li {
          button {
            width: 100%;
            p {
              display: flex;
              width: 60%;
            }
          }
        }
      }
    }
  }
  @media (max-width: 426px) {
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    :hover {
      width: 100%;
      div {
        ul {
          li {
            button {
              width: 25%;
              p {
                display: none;
                width: 0%;
              }
            }
          }
        }
      }
    }
  }
`;

const FirstBarStyle = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 426px) {
    height: 100%;
  }
`;

const ButtonList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  @media (max-width: 426px) {
    height: 100%;
    flex-direction: row;
  }
`;

const ButtonItem = styled.li`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  flex-direction: column;
  :hover {
    button {
      background-color: #f6faf1;
      color: #7cb342;
      svg {
        color: #7cb342;
      }
    }
  }
  @media (max-width: 426px) {
    padding-top: 0px;
    :hover {
      button {
        background-color: #fff;
        color: #666;
        svg {
          color: #666;
        }
      }
    }
    :active {
      button {
        color: red;
      }
    }
    :focus {
      button {
        color: red;
      }
    }
  }
`;

const IconButton = styled.button`
  width: 100%;
  padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  svg {
    width: 30px;
    color: #666666;
    height: auto;
    margin: 0;
  }
`;

const ButtonText = styled.p`
  display: none;
  font-size: 18px;
  font-family: "Lato";
  padding-left: 30px;
`;

// markup
const FirstBar = () => {
  const { setSecondBar, secondBar } = useBars();

  const selectBar = arg => {
    secondBar == arg ? setSecondBar("") : setSecondBar(arg);
  };

  return (
    <FirstBarContainer>
      <FirstBarStyle>
        <ButtonList>
          <ButtonItem onClick={e => selectBar("FILTROS")}>
            <IconButton>
              <TuneIcon />
              <ButtonText>Filtros</ButtonText>
            </IconButton>
          </ButtonItem>
          <ButtonItem onClick={e => selectBar("SPECIAL")}>
            <IconButton>
              <SchoolIcon />
              <ButtonText>Filtros Especiales</ButtonText>
            </IconButton>
          </ButtonItem>
          <ButtonItem onClick={e => selectBar("INFO")}>
            <IconButton>
              <InfoIcon />
              <ButtonText>Información</ButtonText>
            </IconButton>
          </ButtonItem>
          <ButtonItem>
            <IconButton>
              <SettingsIcon />
              <ButtonText>Herramientas</ButtonText>
            </IconButton>
          </ButtonItem>
          <ButtonItem>
            <IconButton>
              <BarChartIcon />
              <ButtonText>Estadísticas</ButtonText>
            </IconButton>
          </ButtonItem>
        </ButtonList>
      </FirstBarStyle>
    </FirstBarContainer>
  );
};

export default FirstBar;
