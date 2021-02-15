import React from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { Checkbox } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import useFiltros from "../../hooks/Filtros";
import usePrecargado from "../../hooks/Precargado";

const CheckboxFilter = styled.div`
  label {
    width: 50%;
    margin: 0;
  }
`;

const CheckboxNew = styled(Checkbox)`
  span {
    color: #7cb342;
  }
`;

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const FiltroOrganismoDependencia = () => {
  const [expanded, setExpanded] = React.useState();
  const { filtros, setOrganismoDependenciaFilter } = useFiltros()

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChecked = ev => {
    const { value, checked } = ev.target;
    setOrganismoDependenciaFilter(value)
  };

  return (
    <Accordion
      square
      expanded={expanded === "panel6"}
      onChange={handleChange("panel6")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label='Expand'
        aria-controls='additional-actions1-content'
        id='additional-actions1-header'
      >
        <FormControlLabel
          aria-label='Acknowledge'
          value='all'
          onClick={event => event.stopPropagation()}
          onFocus={event => event.stopPropagation()}
          control={
            <CheckboxNew
              onChange={handleChecked}
              icon={<RadioButtonCheckedIcon />}
              checkedIcon={<RadioButtonCheckedIcon />}
            />
          }
          label=''
        />
        <p>ORGANISMO DEPENDENCIA</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {[
            { value: "NOASIG *No asignado*", title: "NO ASIGNADO" },
            { value: "CGE    Consejo General de Educacion", title: "CONSEJO GENERAL DE EDUCACION" },
            { value: "DNS Direccion de Nivel Secundario", title: "DIRECCION DE NIVEL SECUNDARIO" },
            { value: "DEP   Direccion de Enseñanza Privada", title: "DIRECCION DE ENSEÑANZA PRIVADA" },
            { value: "DETP Direccion de Educación Tecnico Profesional", title: "DIRECCION DE EDUCACIÓN TECNICO PROFESIONAL" },
            { value: "DNSU Direccion de Nivel Superior", title: "DIRECCION DE NIVEL SUPERIOR" },
            { value: "DEF Direccion de Educación Fisica", title: "DIRECCION DE EDUCACIÓN FISICA" },
            { value: "NC Nivel Central", title: "NIVEL CENTRAL" },
          ].map(dep => (
            <FormControlLabel
              key={dep.value}
              value={dep.value}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={filtros.organismoDependencias.includes(dep.value)}
                />
              }
              label={dep.title}
              labelPlacement='end'
            />
          ))}
        </CheckboxFilter>
      </AccordionDetails>
    </Accordion>
  );
};

export default FiltroOrganismoDependencia;
