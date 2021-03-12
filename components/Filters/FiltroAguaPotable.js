import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch, useSelector } from "react-redux";
import * as type from '../../redux/types';
import { Accordion, AccordionSummary, AccordionDetails, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroAguaPotable = () => {

  const dispatch = useDispatch()
  const { aguaPotable } = useSelector(state => state.filtro)

  const options = [
    {
      id: "tieneAgua",
      label: "TIENE",
      value: "true",
    },
    {
      id: "noTieneAgua",
      label: "NO TIENE",
      value: "false",
    }
  ]

  const handleChecked = ev => {
    const { value, checked } = ev.target;

    if (value != "all") {
      dispatch({
        type: type.SET_AGUA_POTABLE,
        payload: aguaPotable.includes(value) ? aguaPotable.filter(e => e !== value) : [...aguaPotable, value]
      })
    } else {
      dispatch({
        type: type.SET_AGUA_POTABLE,
        payload: aguaPotable.length > 0 ? [] : [...options.map(e => (e.value))]
      })
    }
  };

  return (
    <Accordion
      square
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
              checked={aguaPotable.length > 0 ? true : null}
            />
          }
          label=''
        />
        <p>AGUA POTABLE</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {options.map(lin => (
            <FormControlLabel
              key={lin.id}
              value={lin.value}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={aguaPotable.includes(lin.value.toString())}
                />
              }
              label={lin.label}
              labelPlacement='end'
            />
          ))}
        </CheckboxFilter>
      </AccordionDetails>
    </Accordion>
  );
};

export default FiltroAguaPotable;
