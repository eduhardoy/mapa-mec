import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch, useSelector } from "react-redux";
import * as type from '../../redux/types';
import { Accordion, AccordionSummary, AccordionDetails, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroOrganismoDependencia = () => {


  const dispatch = useDispatch()
  const { organismoDependencias } = useSelector(state => state.filtro)

  const options = [
    { value: "NOASIG *No asignado*", title: "NO ASIGNADO" },
    { value: "CGE    Consejo General de Educacion", title: "CONSEJO GENERAL DE EDUCACION" },
    { value: "DNS Direccion de Nivel Secundario", title: "DIRECCION DE NIVEL SECUNDARIO" },
    { value: "DEP   Direccion de Enseñanza Privada", title: "DIRECCION DE ENSEÑANZA PRIVADA" },
    { value: "DETP Direccion de Educación Tecnico Profesional", title: "DIRECCION DE EDUCACIÓN TECNICO PROFESIONAL" },
    { value: "DNSU Direccion de Nivel Superior", title: "DIRECCION DE NIVEL SUPERIOR" },
    { value: "DEF Direccion de Educación Fisica", title: "DIRECCION DE EDUCACIÓN FISICA" },
    { value: "NC Nivel Central", title: "NIVEL CENTRAL" },
  ]

  const handleChecked = ev => {
    const { value, checked } = ev.target;
    if (value != "all") {
      dispatch({
        type: type.SET_ORGANISMO_DEPENDENIA,
        payload: organismoDependencias.includes(value)
          ? organismoDependencias.filter(c => c !== value)
          : [...organismoDependencias, value]
      })
    } else {
      dispatch({
        type: type.SET_ORGANISMO_DEPENDENIA,
        payload: organismoDependencias.length > 0 ? [] : [...options.map(e => (e.value))]
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
              checked={organismoDependencias.length > 0 ? true : null}
            />
          }
          label=''
        />
        <p>ORGANISMO DEPENDENCIA</p>
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
                  checked={organismoDependencias.includes(dep.value)}
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

export default FiltroOrganismoDependencia;
