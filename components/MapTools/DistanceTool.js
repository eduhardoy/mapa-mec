import React from "react";
import styled from "styled-components";

const DistanceToolWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  width: 70%;
  background-color: #f7f7f7;
  border: black solid 1px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DistanceToolTitle = styled.div``;
const DistanceToolDescription = styled.div``;
const DistanceToolButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DistanceToolButton = styled.button`
  width: 48%;
  margin: 5px;
  height: 40px;
  font-weight: 500;
  outline: none;
  font-size: 10px;
  background-color: #28a745;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  :hover {
    background-color: #218838;
    color: white;
  }
  :focus {
    border: 3px solid #bfe5c8;
    background-color: #28a745;
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

const DistanceToolButtonFinish = styled.button`
  width: 48%;
  margin: 5px;
  height: 40px;
  font-weight: 500;
  outline: none;
  font-size: 10px;
  background-color: #dc3545;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  :hover {
    background-color: #c82333;
    color: white;
  }
  :focus {
    border: 3px solid #f2b1b8;
    background-color: #dc3545;
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

const DistanceToolEscuela = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DistanceToolEscuelaDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DistanceToolInputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  input {
    margin: 8px;
    outline: none;
  }
`;
const DistanceToolButtonSend = styled.button`
  width: 60%;
  margin: 5px;
  height: 35px;
  font-weight: 500;
  outline: none;
  font-size: 14px;
  background-color: #28a745;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  :hover {
    background-color: #218838;
    color: white;
  }
  :focus {
    border: 3px solid #bfe5c8;
    background-color: #28a745;
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

const DistanceTool = () => {
  return (
    <DistanceToolWrapper>
      <DistanceToolTitle>CALCULAR DISTANCIA</DistanceToolTitle>
      <DistanceToolDescription>
        <p>Calcula la distancia entre dos o más puntos</p>
      </DistanceToolDescription>
      <DistanceToolButtonWrapper>
        <DistanceToolButton>SELECCIONAR PUNTOS</DistanceToolButton>
        <DistanceToolButtonFinish>FINALIZAR SELECCION</DistanceToolButtonFinish>
      </DistanceToolButtonWrapper>
      <DistanceToolEscuela>
        <DistanceToolEscuelaDescription>
          <p>
            Calcula la distancia entre dos establecimientos. Ingresar CUEANEXO
          </p>
        </DistanceToolEscuelaDescription>
        <DistanceToolInputWrapper>
          <input type='text' />
          <input type='text' />
        </DistanceToolInputWrapper>
        <DistanceToolButtonSend>EJECUTAR</DistanceToolButtonSend>
      </DistanceToolEscuela>
    </DistanceToolWrapper>
  );
};

export default DistanceTool;
