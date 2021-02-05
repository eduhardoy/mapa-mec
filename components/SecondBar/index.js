import * as React from "react";
import styled from "styled-components";


// styles

const SecondBarStyle = styled.div`
  background-color: #fff;
  border-right: solid #d3d3d3 2px;
  height: calc(100vh - 77px);
  width: 20vw;
  z-index: 9;
  @media (max-width: 768px) {
  }`


// markup
const SecondBar = () => {

  return (
    <SecondBarStyle>
    </SecondBarStyle>
  );
};

export default SecondBar;
