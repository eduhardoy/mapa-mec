import * as React from "react";
import styled from "styled-components";


// styles

const FiltroStyle = styled.main`
  position: absolute;
  width: 18vw;
  height: calc(100vh - 77px);
  box-sizing: border-box;
  left: 100%;
  z-index: 99;
  background-color: #E9ECE9;

  @media (max-width: 768px) {
  }
`;


// markup
const Filtros = () => {

  return (
    <FiltroStyle>
    </FiltroStyle>
  );
};

export default Filtros;
