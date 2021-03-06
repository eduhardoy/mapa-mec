import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch, useSelector } from "react-redux";
import * as type from '../../redux/types';
import { Accordion, AccordionSummary, AccordionDetails, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroEstado = () => {

  const dispatch = useDispatch()
  const { estados } = useSelector(state => state.filtro)
  const { estados: estadosOptions } = useSelector(state => state.precarga)


  const handleChecked = ev => {
    const { value, checked } = ev.target;
    if (value != "all") {
      dispatch({
        type: type.SET_ESTADO,
        payload: estados.includes(parseInt(value))
          ? estados.filter(c => c !== parseInt(value))
          : [...estados, parseInt(value)]
      })
    } else {
      dispatch({
        type: type.SET_ESTADO,
        payload: estados.length > 0 ? [] : [...estadosOptions.map(e => (e.id))]
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
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<RadioButtonCheckedIcon />}
              checked={estados.length > 0 ? true : null}
            />
          }
          label=''
        />
        <p>ESTADO*</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {estadosOptions.map(dep => (
            <FormControlLabel
              key={dep.id}
              value={dep.id}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={estados.includes(dep.id)}
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

export default FiltroEstado;
