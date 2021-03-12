import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch, useSelector } from "react-redux";
import * as type from '../../redux/types';
import { Accordion, AccordionSummary, AccordionDetails, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroConectividad = () => {

  const dispatch = useDispatch()
  const { planConectividad } = useSelector(state => state.filtro)

  const options = [
    {
      id: "lineaC",
      label: "TIENE LÍNEA C",
    },
    {
      id: "noLineaC",
      label: "NO TIENE LÍNEA C"
    }
  ]

  const handleChecked = ev => {
    const { value, checked } = ev.target;

    if (value != "all") {
      dispatch({
        type: type.SET_PLAN_CONECTIVIDAD,
        payload: planConectividad.includes(value) ? planConectividad.filter(e => e !== value) : [...planConectividad, value]
      })
    } else {
      dispatch({
        type: type.SET_PLAN_CONECTIVIDAD,
        payload: planConectividad.length > 0 ? [] : [...options.map(e => (e.id))]
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
              checked={planConectividad.length > 0 ? true : null}
            />
          }
          label=''
        />
        <p>PLAN DE CONECTIVIDAD</p>
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
                  checked={planConectividad.includes(lin.id)}
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

export default FiltroConectividad;
