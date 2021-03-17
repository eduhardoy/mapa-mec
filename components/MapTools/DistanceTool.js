import React from "react";
import styled from "styled-components";

const DistanceToolWrapper = styled.div`
  margin: 20px;
  width: 70%;
  padding: 20px;
  background-color: #f7f7f7;
`;

const DistanceToolTitle = styled.div``;
const DistanceToolDescription = styled.div``;
const DistanceToolButtonWrapper = styled.div``;
const DistanceToolButton = styled.button`
  width: 45%;
  margin: 5px;
`;
const DistanceToolEscuela = styled.div``;
const DistanceToolEscuelaDescription = styled.div``;
const DistanceToolInputWrapper = styled.form``;
const DistanceToolButtonSend = styled.button``;

const DistanceTool = () => {
  return (
    <DistanceToolWrapper>
      <DistanceToolTitle>CALCULAR DISTANCIA</DistanceToolTitle>
      <DistanceToolDescription>
        <p>Calcula la distancia entre dos o más puntos</p>
      </DistanceToolDescription>
      <DistanceToolButtonWrapper>
        <DistanceToolButton>SELECCIONAR PUNTOS</DistanceToolButton>
        <DistanceToolButton>FINALIZAR SELECCION</DistanceToolButton>
      </DistanceToolButtonWrapper>
      <DistanceToolEscuela>
        <DistanceToolEscuelaDescription>
          <p>Calcula la distancia entre dos establecimientos</p>
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
