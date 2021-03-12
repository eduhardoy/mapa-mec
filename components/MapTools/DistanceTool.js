import React from "react";
import styled from "styled-components";

const DistanceToolWrapper = styled.div`
  width: 80%;
  background-color: #f7f7f7;
`;

const DistanceToolTitle = styled.div``;
const DistanceToolDescription = styled.div``;
const DistanceToolButton = styled.button``;
const DistanceToolEscuela = styled.div``;
const DistanceToolEscuelaDescription = styled.div``;
const DistanceToolInputWrapper = styled.form``;
const DistanceToolButtonSend = styled.button``;

const DistanceTool = () => {
  return (
    <DistanceToolWrapper>
      <DistanceToolTitle></DistanceToolTitle>
      <DistanceToolDescription></DistanceToolDescription>
      <DistanceToolButton></DistanceToolButton>
      <DistanceToolButton></DistanceToolButton>
      <DistanceToolEscuela>
        <DistanceToolEscuelaDescription></DistanceToolEscuelaDescription>
        <DistanceToolInputWrapper>
          <input type='text' />
          <input type='text' />
        </DistanceToolInputWrapper>
        <DistanceToolButtonSend></DistanceToolButtonSend>
      </DistanceToolEscuela>
    </DistanceToolWrapper>
  );
};

export default DistanceTool;
