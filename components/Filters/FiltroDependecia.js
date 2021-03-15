import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch, useSelector } from "react-redux";
import * as type from '../../redux/types';
import { Accordion, AccordionSummary, AccordionDetails, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroDependencia = ({ filtros, setDependenciaFilter }) => {

  const dispatch = useDispatch()
  const { dependencias } = useSelector(state => state.filtro)

  const options = [
    "Provincial", "Municipal", "Nacional"
  ]

  const handleChecked = ev => {
    const { value, checked } = ev.target;

    if (value != "all") {
      dispatch({
        type: type.SET_DEPENDENCIA,
        payload: dependencias.includes(value)
          ? dependencias.filter(c => c !== value)
          : [...filtro.dependencias, value]
      })
    } else {
      dispatch({
        type: type.SET_DEPENDENCIA,
        payload: dependencias.length > 0 ? [] : [...options.map(e => (e))]
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
              checked={dependencias.length > 0 ? true : null}
            />
          }
          label=''
        />
        <p>DEPENDENCIA*</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {options.map(dep => (
            <FormControlLabel
              key={dep}
              value={dep}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={dependencias.includes(dep)}
                />
              }
              label={dep}
              labelPlacement='end'
            />
          ))}
        </CheckboxFilter>
      </AccordionDetails>
    </Accordion>
  );
};

export default FiltroDependencia;
