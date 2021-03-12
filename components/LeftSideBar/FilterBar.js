import * as React from "react";
import styled from "styled-components";
import useBars from "../../hooks/Bars/index.js";
import FilterWrapper from "../Filters/FilterWrapper.js";

// styles
const SecondBarStyle = styled.div`
  background-color: #fff;
  box-shadow: 1px 0px 5px 1px rgba(53, 53, 53, 0.25);
  border-right: solid #d3d3d3 2px;
  height: calc(100vh - 77px);
  width: 30vw;
  min-width: 350px;
  z-index: 9;
  position: absolute;
  left: 70px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: ${props => props.display};
  @media (max-width: 426px) {
    height: calc(100% - 177px);
    width: 100%;
    position: absolute;
    bottom: 50px;
    left: 0;
  }
`;

const FiltrosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  font-family: "Lato", sans-serif;

  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #666666;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 45%;
  border: #67a534 5px solid;
  height: 60px;
  font-weight: 500;
  outline: none;
  font-size: 12px;
  margin-top: 10px;
  background-color: #67a534;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #7cb342;
  }
  :focus {
    border: 5px solid #b9e2c2;
    background-color: #7cb342;
  }
  input {
    background-color: #f5f5f5;
    height: 16px;
    margin: 5px;
    outline: none;
    border: none;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FiltrosButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #7cb454;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: white;
  outline: none;
  box-sizing: border-box;
  width: 5%;
  :hover {
    background-color: #7cb342;
  }
  :focus {
    box-shadow: 2px -2px 9px 4px rgba(124, 179, 66, 0.93);
    background-color: #7cb342;
  }
`;

// markup
const FilterBar = () => {
  const { secondBar } = useBars();
  return (
    <SecondBarStyle display={secondBar == "FILTROS" ? "flex" : "none"}>
      <FiltrosContainer>
        <FilterWrapper />
        <ButtonWrapper>
          <Button>Ver mapa de conectividad</Button>
          <Button>Ver mapa de proveedores</Button>
          <Button>Ver escuelas sin georeferencia</Button>
          <Button>
            Escuelas con matricula menor a{" "}
            <input type='text' maxlength='3' placeholder='5' size='3'></input>
          </Button>
        </ButtonWrapper>
      </FiltrosContainer>
      {/* <ButtonContainer>
        <FiltrosButton>FILTRAR</FiltrosButton>
      </ButtonContainer> */}
    </SecondBarStyle>
  );
};

export default FilterBar;
