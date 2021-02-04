import * as React from "react";
import styled from "styled-components";
import SecondBar from "../SecondBar";
import FirstBar from "../FirstBar";

// styles

const LeftSideBarMenuStyle = styled.div`
display: flex;
`;

const FirstBarContainer = styled.div`
  background-color: #fff;
  border-right: solid #d3d3d3 2px;
  height: calc(100vh - 77px);
  width: 5vw;
  min-width: 50px;
  z-index: 10;
  margin: 0;
  padding: 0;
  opacity: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 768px) {
  }
`

const SecondBarContainer = styled.div`
  background-color: #fff;
  border-right: solid #d3d3d3 2px;
  height: calc(100vh - 77px);
  width: 18vw;
  z-index: 9;
  background-color: #E9ECE9;
  @media (max-width: 768px) {
  }`


// markup
const LeftSideBarMenu = () => {

  return (
    <LeftSideBarMenuStyle>
      <FirstBarContainer>
      <FirstBar/>
      </FirstBarContainer>
      <SecondBarContainer>
        <SecondBar/>
      </SecondBarContainer>
    </LeftSideBarMenuStyle>
  );
};

export default LeftSideBarMenu;
