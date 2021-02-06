import * as React from "react";
import styled from "styled-components";
import Filtros from "./Filtros.js";


// styles

const SecondBarStyle = styled.div`
  background-color: #fff;
  border-right: solid #d3d3d3 2px;
  height: calc(100vh - 77px);
  width: 20vw;
  z-index: 9;
  overflow-y: scroll;

::-webkit-scrollbar {
  width: 20px;
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
`


// markup
const SecondBar = () => {

  return (
    <SecondBarStyle>
      <Filtros />
    </SecondBarStyle>
  );
};

export default SecondBar;
