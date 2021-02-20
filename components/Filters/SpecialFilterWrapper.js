import React from "react";
import styled from "styled-components";
import useFiltros from "../../hooks/Filtros/index.js";
import useSpecialFilter from "../../hooks/Filtros/SpecialFilter.js";
import FiltroCabecera from "./FiltroCabecera.js";

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
`;

const SpecialFilterWrapper = () => {
  const {} = useSpecialFilter();
  return (
    <Wrapper>
      <FiltroCabecera />
    </Wrapper>
  );
};

export default SpecialFilterWrapper;
