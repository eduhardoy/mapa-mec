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
  /* border-right: solid #d3d3d3 2px; */
  height: calc(100vh - 77px);
  width: 4vw;
  min-width: 40px;
  max-width: 55px;
  z-index: 10;
  margin: 0;
  padding: 0;
  box-shadow: 1px 0px 5px 1px rgba(53,53,53,0.25);
`

// markup
const LeftSideBarMenu = () => {

  return (
    <LeftSideBarMenuStyle>
      <FirstBarContainer>
      <FirstBar/>
      </FirstBarContainer>
      <SecondBar/>
    </LeftSideBarMenuStyle>
  );
};

export default LeftSideBarMenu;
