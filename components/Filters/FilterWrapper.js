import React from "react";
import styled from "styled-components";
import FiltroDepartamentos from "./FiltroDepartamentos.js";
import FiltroDependencia from "./FiltroDependecia.js";
import FiltroLocalidades from "./FiltroLocalidades.js";
import FiltroEstado from "./FiltroEstado.js";
import FiltroJurisdiccion from "./FiltroJurisdiccion.js";
import FiltroOrganismoDependencia from "./FiltroOrganismoDependencia.js";
import FiltroNivel from "./FiltroNivel.js";
import FiltroModalidad from "./FiltroModalidad.js";
import FiltroGestion from "./FiltroGestion.js";
import FiltroAmbito from "./FiltroAmbito.js";
import FiltroAulaDigitalMovil from "./FiltroAulaDigitalMovil.js";
import FiltroInternet from "./FiltroInternet.js";
import FiltroAguaPotable from "./FiltroAguaPotable.js";
import FiltroProveedores from "./FiltroProveedores.js";
import FiltroAgrupaciones from "./FiltroAgrupaciones.js";
import FiltroCabeceras from "./FiltroCabecera.js";
import FiltroConectividad from './FiltroConectividad'

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
`;

const FilterWrapper = () => {
  return (
    <Wrapper>
      <FiltroDepartamentos />
      <FiltroLocalidades />
      <FiltroDependencia />
      <FiltroEstado />
      <FiltroJurisdiccion />
      <FiltroOrganismoDependencia />
      <FiltroNivel />
      <FiltroModalidad />
      <FiltroGestion />
      <FiltroAmbito />
      <FiltroAulaDigitalMovil />
      <FiltroInternet />
      <FiltroConectividad />
      <FiltroAguaPotable />
      <FiltroProveedores />
      <FiltroAgrupaciones />
      <FiltroCabeceras />
    </Wrapper>
  );
};

export default FilterWrapper;
