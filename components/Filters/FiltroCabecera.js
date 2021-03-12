import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroCabeceras = ({ filtros, setCabecerasFilter }) => {
  const [expanded, setExpanded] = React.useState();

  const handleChecked = (ev) => {
    const { value, checked } = ev.target;
    setCabecerasFilter(value);
  };

  return (
    <Accordion
      square
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
        aria-controls="additional-actions1-content"
        id="additional-actions1-header"
      >
        <FormControlLabel
          aria-label="Acknowledge"
          value="all"
          onClick={(event) => event.stopPropagation()}
          onFocus={(event) => event.stopPropagation()}
          control={
            <CheckboxNew
              onChange={handleChecked}
              icon={<RadioButtonUnchecked />}
              checkedIcon={<RadioButtonCheckedIcon />}
            />
          }
          label=""
        />
        <p>CABECERAS PRIMARIAS</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {[
            {
              label: "PRIMARIAS",
              id: "PRIMARIAS"
            },
          ].map(cab => (
            <FormControlLabel
              key={cab.id}
              value={cab.id}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={filtros.cabeceras.includes(cab.id)}
                />
              }
              label={cab.label}
              labelPlacement='end'
            />
          ))}
        </CheckboxFilter>
      </AccordionDetails>
    </Accordion>
  );
};

export default FiltroCabeceras;
