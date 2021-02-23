import React from "react";
import styled from "styled-components";

import { Accordion } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";

import useMarcadores from "../../hooks/Marcadores";

const StyledInfoWrapper = styled.div`
  width: 100%;
  margin: 0px;
  padding: 0px;
`;

const StyledAccordion = styled(Accordion)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px;
  box-sizing: border-box;
  flex-direction: column;
  box-shadow: none !important;
  border-bottom: 1px #ededed solid;
  border-radius: 0px !important;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  padding: 0px;
`;

const LogoFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  img {
    width: 32px;
  }
`;

const TituloFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 90%;
  margin-left: 15px;
  h3 {
    font-weight: 700;
    font-size: 16px;
    margin: 5px;
  }
  p {
    font-size: 14px;
    margin: 5px;
    color: grey;
  }
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 85%;
  padding: 0px;
  margin-left: 5%;
  h3 {
    font-size: 15px;
    margin: 5px;
  }
`;

const Elemento = styled.div`
  margin: 5px;
  h4 {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  p {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const { marcadores } = useMarcadores();

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const obtenerIcono = ele => {
    if (ele.domicilio.geo.geometry.coordinates.includes(0))
      return "./images/pinSinGeo.png";

    const inicial = [152, 155, 121, 122, 100, 101];
    const primaria = [136, 123, 126, 140, 102, 105, 153, 156, 158];
    const secundaria = [
      143,
      144,
      108,
      109,
      110,
      111,
      129,
      130,
      147,
      148,
      151,
      154,
      157,
      159,
      131,
      132,
      149,
      150,
      138,
    ];
    const superior = [117, 115];

    if (
      Object.values(ele.ofertas).every(e =>
        inicial.includes(parseInt(e.idOferta))
      )
    )
      return "./images/pinIni.png";
    else if (
      Object.values(ele.ofertas).every(e =>
        primaria.includes(parseInt(e.idOferta))
      )
    )
      return "./images/pinPrim.png";
    else if (
      Object.values(ele.ofertas).every(e =>
        secundaria.includes(parseInt(e.idOferta))
      )
    )
      return "./images/pinSecu.png";
    else if (
      Object.values(ele.ofertas).every(e =>
        superior.includes(parseInt(e.idOferta))
      )
    )
      return "./images/pinSup.png";

    let ar = [];

    Object.values(ele.ofertas).map(e => {
      if (inicial.includes(parseInt(e.idOferta))) ar.push("inicial");
      if (primaria.includes(parseInt(e.idOferta))) ar.push("primaria");
      if (secundaria.includes(parseInt(e.idOferta))) ar.push("secundaria");
      if (superior.includes(parseInt(e.idOferta))) ar.push("superior");
    });

    if (ar.length == 0) return "./images/pinComp.png";

    return "./images/pinVar.png";
  };

  return (
    <StyledInfoWrapper>
      {marcadores.map(mar => (
        <StyledAccordion
          expanded={expanded === mar.cueanexo}
          onChange={handleChange(mar.cueanexo)}
        >
          <StyledAccordionSummary aria-controls='panel1bh-content' id={mar.id}>
            <LogoFilter>
              <img src={obtenerIcono(mar)} alt='' />
            </LogoFilter>
            <TituloFilter>
              <h3>{mar.colegio.nombre}</h3>
              <p>CUEANEXO: {mar.cueanexo}</p>
            </TituloFilter>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <h3>INFORMACION GENERAL</h3>
            <Elemento>
              <h4>Sector</h4>
              <p>{mar.establecimiento.sector}</p>
            </Elemento>
            <Elemento>
              <h4>Ámbito</h4>
              <p>{mar.ambito.nombre}</p>
            </Elemento>
            <Elemento>
              <h4>Ofertas</h4>
              <p>
                {mar.ofertas.map(
                  ofe =>
                    `Modalidad: ${ofe.modalidad} - Nivel: ${ofe.base} - Jornada: ${ofe.jornada}.\n`
                )}
              </p>
            </Elemento>
            <Elemento>
              <h4>Datos de contacto</h4>
              <p>
                Domicilio: {mar.domicilio.calle} {mar.domicilio.nro}
                <br />
                Localidad: {mar.domicilio.localidad.nombre} <br />
                Departamento: {mar.domicilio.departamento.nombre} <br />
                Internet: {mar.colegio.internet ? "Si tiene" : "No tiene"}{" "}
                <br />
                Proveedores:{" "}
                {mar.conexiones.map((con, index) => {
                  if (mar.conexiones.length == index + 1)
                    return `${con.conexionProveedor.nombre}`;
                  return `${con.conexionProveedor.nombre} - `;
                })}
                <br />
              </p>
            </Elemento>
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </StyledInfoWrapper>
  );
}
