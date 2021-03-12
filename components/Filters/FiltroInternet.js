import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { Accordion, AccordionDetails, AccordionSummary, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroInternet = ({ filtros, setInternetFilter }) => {
  const [expanded, setExpanded] = React.useState();

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChecked = ev => {
    const { value, checked } = ev.target;
    setInternetFilter(value)
  };

  return (
    <Accordion
      square
      expanded={expanded === "panel12"}
      onChange={handleChange("panel12")}
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
        <p>INTERNET</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {[
            { value: true, title: "TIENE" },
            { value: false, title: "NO TIENE" }
          ].map(dep => (
            <FormControlLabel
              key={dep.value}
              value={dep.value}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={filtros.internet.includes(dep.value)}
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

export default FiltroInternet;
