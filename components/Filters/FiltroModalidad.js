import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch, useSelector } from "react-redux";
import * as type from '../../redux/types';
import { Accordion, AccordionSummary, AccordionDetails, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroModalidad = () => {

  const dispatch = useDispatch()
  const { modalidades } = useSelector(state => state.filtro)

  const options = [
    { value: "Común", title: "COMUN" },
    { value: "Especial", title: "ESPECIAL" },
    { value: "Adultos", title: "ADULTOS" }
  ]

  const handleChecked = ev => {
    const { value, checked } = ev.target;
    if (value != "all") {
      dispatch({
        type: type.SET_MODALIDAD,
        payload: modalidades.includes(value)
          ? modalidades.filter(c => c !== value)
          : [...modalidades, value]
      })
    } else {
      dispatch({
        type: type.SET_MODALIDAD,
        payload: modalidades.length > 0 ? [] : [...options.map(e => (e.value))]
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
              checked={modalidades.length > 0 ? true : null}
            />
          }
          label=''
        />
        <p>MODALIDAD</p>
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
                  checked={modalidades.includes(dep.value)}
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

export default FiltroModalidad;
