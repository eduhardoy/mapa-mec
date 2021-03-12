import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch, useSelector } from "react-redux";
import * as type from '../../redux/types';
import { Accordion, AccordionSummary, AccordionDetails, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroAgrupaciones = () => {

  const dispatch = useDispatch()
  const { agrupaciones } = useSelector(state => state.filtro)

  const options = [
    {
      id: "efas",
      label: "EFAS",
    },
  ]

  const handleChecked = ev => {
    const { value, checked } = ev.target;

    if (value != "all") {
      dispatch({
        type: type.SET_AGRUPACIONES,
        payload: agrupaciones.includes(value) ? agrupaciones.filter(e => e !== value) : [...agrupaciones, value]
      })
    } else {
      dispatch({
        type: type.SET_AGRUPACIONES,
        payload: agrupaciones.length > 0 ? [] : [...options.map(e => (e.id))]
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
              checked={agrupaciones.length > 0 ? true : null}
            />
          }
          label=''
        />
        <p>AGRUPACIONES</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {options.map(lin => (
            <FormControlLabel
              key={lin.id}
              value={lin.id}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={agrupaciones.includes(lin.id)}
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

export default FiltroAgrupaciones;
