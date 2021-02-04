import * as React from "react";
import styled from "styled-components";


// styles

const SecondBarStyle = styled.div`
  background-color: #E9ECE9;
  border-right: solid #d3d3d3 2px;
  height: calc(100vh - 77px);
  width: 18vw;
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
