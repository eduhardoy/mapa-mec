import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { Accordion, AccordionDetails, AccordionSummary, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroOrganismoDependencia = ({ filtros, setOrganismoDependenciaFilter }) => {
  const [expanded, setExpanded] = React.useState();

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
              icon={<RadioButtonUnchecked />}
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
