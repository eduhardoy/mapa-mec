import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch, useSelector } from "react-redux";
import * as type from '../../redux/types';
import { Accordion, AccordionDetails, AccordionSummary, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroAulaDigitalMovil = () => {

  const dispatch = useDispatch()
  const { aulaDigitalMoviles } = useSelector(state => state.filtro)

  const handleChecked = ev => {
    const { value, checked } = ev.target;

    dispatch({
      type: type.SET_AULA_DIGITAL_MOVIL,
      payload: aulaDigitalMoviles.length > 0 ? [] : ["ADM"]
    })
  };

  return (
    <Accordion
      square
    >
      <AccordionSummary
        // expandIcon={<ExpandMoreIcon />}
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
            />
          }
          label=''
        />
        <p>AULA DIGITAL MOVIL</p>
      </AccordionSummary>
      {/* <AccordionDetails>
        <CheckboxFilter>
          {localidades.map(dep => (
            <FormControlLabel
              key={dep.id}
              value={dep.id}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                />
              }
              label={dep.nombre}
              labelPlacement='end'
            />
          ))}
        </CheckboxFilter>
      </AccordionDetails> */}
    </Accordion>
  );
};

export default FiltroAulaDigitalMovil;
