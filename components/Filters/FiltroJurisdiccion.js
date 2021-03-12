import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { Accordion, AccordionDetails, AccordionSummary, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroJurisdiccion = ({ filtros, setJurisdiccionFilter }) => {
  const [expanded, setExpanded] = React.useState();

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChecked = ev => {
    const { value, checked } = ev.target;
    setJurisdiccionFilter(value)
  };

  return (
    <Accordion
      square
      expanded={expanded === "panel5"}
      onChange={handleChange("panel5")}
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
        <p>JURISDICCIÓN</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {[
            { value: "NO ASIGNADA", title: "NO ASIGNADA" },
            { value: "15 Direccion General de Enseñanza Privada", title: "DIRECCION GENERAL DE ENSEÑANZA PRIVADA" },
            { value: "33 Consejo General de Educación", title: "CONSEJO GENERAL DE EDUCACIÓN" },
            { value: "37 Consejo General de Educación - Suplentes", title: "CONSEJO GENERAL DE EDUCACIÓN - SUPLENTES" },
            { value: "23 Direccion General de Enseñanza Secundaria", title: "DIRECCION GENERAL DE ENSEÑANZA SECUNDARIA" },
            { value: "03 Ministerio de Educación", title: "MINISTERIO DE EDUCACIÓN" }
          ].map(dep => (
            <FormControlLabel
              key={dep.value}
              value={dep.value}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={filtros.jurisdicciones.includes(dep.value)}
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

export default FiltroJurisdiccion;
