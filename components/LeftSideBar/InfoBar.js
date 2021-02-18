import * as React from "react";
import styled from "styled-components";
import useBars from "../../hooks/Bars";
import InfoWrapper from "../Filters/InfoWrapper";

// styles
const InfoBarStyle = styled.div`
  background-color: #fff;
  box-shadow: 1px 0px 5px 1px rgba(53, 53, 53, 0.25);
  border-right: solid #d3d3d3 2px;
  height: calc(100vh - 77px);
  width: 25vw;
  z-index: 9;
  display: ${props => props.display};
  flex-direction: column;
  align-items: center;
`;

const InfoContainer = styled.div`
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

// markup
const InfoBar = () => {
  const {secondBar} = useBars()
  return (
    <InfoBarStyle display={secondBar == "INFO" ? "flex" : "none"}>
      <InfoContainer>
        <InfoWrapper />
      </InfoContainer>
    </InfoBarStyle>
  );
};

export default InfoBar;
