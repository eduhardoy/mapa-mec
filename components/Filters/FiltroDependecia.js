import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { Accordion, AccordionDetails, AccordionSummary, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroDependencia = ({ filtros, setDependenciaFilter }) => {
  const [expanded, setExpanded] = React.useState();

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChecked = ev => {
    const { value, checked } = ev.target;
    console.log(value)
    setDependenciaFilter(value)
  };

  return (
    <Accordion
      square
      expanded={expanded === "panel3"}
      onChange={handleChange("panel3")}
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
        <p>DEPENDENCIA*</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {["Provincial", "Municipal", "Nacional"].map(dep => (
            <FormControlLabel
              key={dep}
              value={dep}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={filtros.dependencias.includes(dep)}
                />
              }
              label={dep}
              labelPlacement='end'
            />
          ))}
        </CheckboxFilter>
      </AccordionDetails>
    </Accordion>
  );
};

export default FiltroDependencia;
