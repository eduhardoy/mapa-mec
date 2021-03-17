import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch, useSelector } from "react-redux";
import * as type from '../../redux/types';
import { Accordion, AccordionSummary, AccordionDetails, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroDepartamentos = () => {

  const dispatch = useDispatch()
  const { departamentos: departamentosFiltro } = useSelector(state => state.filtro)
  const { departamentos } = useSelector(state => state.precarga)

  const handleChecked = (ev) => {
    const { value, checked } = ev.target;

    if (value != "all") {
      dispatch({
        type: type.SET_DEPARTAMENTOS,
        payload: departamentosFiltro.includes(value)
          ? departamentosFiltro.filter(e => e !== value)
          : [...departamentosFiltro, value]
      })
    } else {
      dispatch({
        type: type.SET_DEPARTAMENTOS,
        payload: departamentosFiltro.length > 0
          ? []
          : [...departamentos.map(e => (e.id.toString()))]
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
              checked={departamentosFiltro.length > 0 ? true : null}
            />
          }
          label=''
        />
        <p>DEPARTAMENTOS*</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {departamentos.map(dep => (
            <FormControlLabel
              key={dep.id}
              value={dep.id}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={departamentosFiltro.includes(dep.id.toString())}
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


export default FiltroDepartamentos;
