import * as React from "react";
import styled from "styled-components";
import useBars from "../../hooks/Bars/index.js";
import FilterWrapper from "../Filters/FilterWrapper.js";
import SpecialFilterWrapper from "../Filters/SpecialFilterWrapper.js";

// styles
const SecondBarStyle = styled.div`
  background-color: #fff;
  box-shadow: 1px 0px 5px 1px rgba(53, 53, 53, 0.25);
  border-right: solid #d3d3d3 2px;
  height: calc(100vh - 77px);
  width: 30vw;
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
  height: 90%;
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
  :hover {
    background-color: #7cb342;
  }
  :focus {
    box-shadow: 2px -2px 9px 4px rgba(124, 179, 66, 0.93);
    background-color: #7cb342;
  }
`;

// markup
const SpecialFilterBar = () => {
  const { secondBar } = useBars();
  return (
    <SecondBarStyle display={secondBar == "SPECIAL" ? "flex" : "none"}>
      <FiltrosContainer>
        <SpecialFilterWrapper />
      </FiltrosContainer>
    </SecondBarStyle>
  );
};

export default SpecialFilterBar;
