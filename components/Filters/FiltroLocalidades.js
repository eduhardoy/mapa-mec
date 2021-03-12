import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import usePrecargado from "../../hooks/Precargado";
import { Accordion, AccordionDetails, AccordionSummary, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroLocalidades = ({ filtros, setLocalidadFilter }) => {
  const [expanded, setExpanded] = React.useState();
  const { localidades } = usePrecargado()

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChecked = ev => {
    const { value, checked } = ev.target;
    setLocalidadFilter(value)
  };

  return (
    <Accordion
      square
      expanded={expanded === "panel2"}
      onChange={handleChange("panel2")}
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
        <p>LOCALIDADES*</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {filtros.localidadesFiltered.map(dep => (
            <FormControlLabel
              key={dep.id}
              value={dep.id}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={filtros.localidades.includes(dep.id)}
                />
              }
              label={dep.nombre}
              labelPlacement='end'
            />
          ))}
        </CheckboxFilter>
      </AccordionDetails>
    </Accordion>
  );
};

export default FiltroLocalidades;
