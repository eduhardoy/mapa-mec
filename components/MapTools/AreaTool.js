import React from "react";
import styled from "styled-components";

const AreaToolWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  width: 70%;
  background-color: #f7f7f7;
  border: black solid 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AreaToolTitle = styled.div``;
const AreaToolDescription = styled.div``;
const AreaToolButton = styled.button`
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
