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
import useFiltros from "../../hooks/Filtros/index.js";

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
`;

const FilterWrapper = () => {
  const {
    filtros,
    setDepartamentoFilter,
    setLocalidadFilter,
    setDependenciaFilter,
    setEstadoFilter,
    setJurisdiccionFilter,
    setOrganismoDependenciaFilter,
    setNivelesFilter,
    setModalidadesFilter,
    setGestionesFilter,
    setAmbitosFilter,
    setInternetFilter,
    setInternetProveedoresFilter
  } = useFiltros()
  return (
    <Wrapper>
      <FiltroDepartamentos filtros={filtros} setDepartamentoFilter={setDepartamentoFilter} />
      <FiltroLocalidades filtros={filtros} setLocalidadFilter={setLocalidadFilter} />
      <FiltroDependencia filtros={filtros} setDependenciaFilter={setDependenciaFilter} />
      <FiltroEstado filtros={filtros} setEstadoFilter={setEstadoFilter} />
      <FiltroJurisdiccion filtros={filtros} setJurisdiccionFilter={setJurisdiccionFilter} />
      <FiltroOrganismoDependencia filtros={filtros} setOrganismoDependenciaFilter={setOrganismoDependenciaFilter} />
      <FiltroNivel filtros={filtros} setNivelesFilter={setNivelesFilter} />
      <FiltroModalidad filtros={filtros} setModalidadesFilter={setModalidadesFilter} />
      <FiltroGestion filtros={filtros} setGestionesFilter={setGestionesFilter} />
      <FiltroAmbito filtros={filtros} setAmbitosFilter={setAmbitosFilter} />
      {/* <FiltroAulaDigitalMovil /> */}
      <FiltroInternet filtros={filtros} setInternetFilter={setInternetFilter} />
      {/* <FiltroAguaPotable /> */}
      <FiltroProveedores filtros={filtros} setInternetProveedoresFilter={setInternetProveedoresFilter} />
      {/* <FiltroAgrupaciones /> */}
    </Wrapper>
  );
};

export default FilterWrapper;
