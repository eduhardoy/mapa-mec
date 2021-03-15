import React from "react";
import styled from "styled-components";

const AreaToolWrapper = styled.div`
  width: 80%;
  background-color: #f7f7f7;
`;

const AreaToolTitle = styled.div``;
const AreaToolDescription = styled.div``;
const AreaToolButton = styled.button``;

const AreaTool = () => {
  return (
    <AreaToolWrapper>
      <AreaToolTitle></AreaToolTitle>
      <AreaToolDescription></AreaToolDescription>
      <AreaToolButton></AreaToolButton>
    </AreaToolWrapper>
  );
};

export default AreaTool;
