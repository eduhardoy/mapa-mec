import React from "react";
import styled from "styled-components";

const AreaToolWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  width: 70%;
  background-color: #f7f7f7;
`;

const AreaToolTitle = styled.div``;
const AreaToolDescription = styled.div``;
const AreaToolButton = styled.button``;

const AreaTool = () => {
  return (
    <AreaToolWrapper>
      <AreaToolTitle>
        <p>CALCULAR ÁREA</p>
      </AreaToolTitle>
      <AreaToolDescription>
        <p>Calcula el área comprendida entre varios puntos.</p>
      </AreaToolDescription>
      <AreaToolButton>DIBUJAR ÁREA</AreaToolButton>
    </AreaToolWrapper>
  );
};

export default AreaTool;
