import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch, useSelector } from "react-redux";
import * as type from '../../redux/types';
import { Accordion, AccordionSummary, AccordionDetails, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroJurisdiccion = () => {

  const dispatch = useDispatch()
  const { jurisdicciones } = useSelector(state => state.filtro)

  const options = [
    { value: "NO ASIGNADA", title: "NO ASIGNADA" },
    { value: "15 Direccion General de Enseñanza Privada", title: "DIRECCION GENERAL DE ENSEÑANZA PRIVADA" },
    { value: "33 Consejo General de Educación", title: "CONSEJO GENERAL DE EDUCACIÓN" },
    { value: "37 Consejo General de Educación - Suplentes", title: "CONSEJO GENERAL DE EDUCACIÓN - SUPLENTES" },
    { value: "23 Direccion General de Enseñanza Secundaria", title: "DIRECCION GENERAL DE ENSEÑANZA SECUNDARIA" },
    { value: "03 Ministerio de Educación", title: "MINISTERIO DE EDUCACIÓN" }
  ]

  const handleChecked = ev => {
    const { value, checked } = ev.target;
    if (value != "all") {
      dispatch({
        type: type.SET_JURISDICCION,
        payload: jurisdicciones.includes(value)
          ? jurisdicciones.filter(c => c !== value)
          : [...jurisdicciones, value]
      })
    } else {
      dispatch({
        type: type.SET_JURISDICCION,
        payload: jurisdicciones.length > 0 ? [] : [...options.map(e => (e.value))]
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
              checked={jurisdicciones.length > 0 ? true : null}
            />
          }
          label=''
        />
        <p>JURISDICCIÓN</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {options.map(dep => (
            <FormControlLabel
              key={dep.value}
              value={dep.value}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={jurisdicciones.includes(dep.value)}
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

export default FiltroJurisdiccion;
