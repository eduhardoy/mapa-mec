import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { Accordion, AccordionDetails, AccordionSummary, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroNivel = ({ filtros, setNivelesFilter }) => {
  const [expanded, setExpanded] = React.useState();

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChecked = ev => {
    const { value, checked } = ev.target;
    setNivelesFilter(value)
  };

  return (
    <Accordion
      square
      expanded={expanded === "panel7"}
      onChange={handleChange("panel7")}
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
        <p>NIVEL</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {[
            { value: "152,155,121,122,100,101", id: "inicial", title: "INCIAL" },
            { value: "136,123,126,140,102,105,153,156,158", id: "primaria", title: "PRIMARIA" },
            { value: "143,144,108,109,110,111,129,130,147,148,151,154,157,159,131,132,149,150,138", id: "secundaria", title: "SECUNDARIA" },
            { value: "117,115", id: "superior", title: "SUPERIOR" }
          ].map(dep => (
            <FormControlLabel
              key={dep.id}
              value={dep.value}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={filtros.niveles.some(n => dep.value.split(",").includes(n))}
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

export default FiltroNivel;
