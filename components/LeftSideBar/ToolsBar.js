import * as React from "react";
import styled from "styled-components";
import useBars from "../../hooks/Bars";

// styles
const ToolsBarStyle = styled.div`
  background-color: #fff;
  box-shadow: 1px 0px 5px 1px rgba(53, 53, 53, 0.25);
  border-right: solid #d3d3d3 2px;
  height: calc(100vh - 77px);
  width: 20vw;
  min-width: 200px;
  z-index: 9;
  position: absolute;
  left: 70px;
  bottom: 0;
  display: ${props => props.display};
  flex-direction: column;
  align-items: center;
  @media (max-width: 426px) {
    height: calc(100% - 177px);
    width: 100%;
    position: absolute;
    bottom: 50px;
    left: 0;
  }
`;

const ToolsContainer = styled.div`
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

// markup
const ToolsBar = () => {
  const { secondBar } = useBars();
  return (
    <ToolsBarStyle display={secondBar == "TOOLS" ? "flex" : "none"}>
      <ToolsContainer></ToolsContainer>
    </ToolsBarStyle>
  );
};

export default ToolsBar;
