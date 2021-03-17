import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch, useSelector } from "react-redux";
import * as type from '../../redux/types';
import { Accordion, AccordionSummary, AccordionDetails, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroProveedores = () => {

  const dispatch = useDispatch()
  const { proveedoresInternet } = useSelector(state => state.filtro)
  const { internetProveedores: options } = useSelector(state => state.precarga)


  const handleChecked = ev => {
    const { value, checked } = ev.target;
    if (value != "all") {
      dispatch({
        type: type.SET_PROVEEDORES_INTERNET,
        payload: proveedoresInternet.includes(value)
          ? proveedoresInternet.filter(c => c !== value)
          : [...proveedoresInternet, value]
      })
    } else {
      dispatch({
        type: type.SET_PROVEEDORES_INTERNET,
        payload: proveedoresInternet.length > 0 ? [] : [...options.map(e => (e.id.toString()))]
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
              checked={proveedoresInternet.length > 0 ? true : null}
            />
          }
          label=''
        />
        <p>PROVEEDORES</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {options.map(dep => (
            <FormControlLabel
              key={dep.id}
              value={dep.id}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={proveedoresInternet.includes(dep.id.toString())}
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

export default FiltroProveedores;
