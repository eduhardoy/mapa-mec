import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch, useSelector } from "react-redux";
import * as type from '../../redux/types';
import { Accordion, AccordionSummary, AccordionDetails, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroCabeceras = () => {
  const dispatch = useDispatch()
  const { cabeceras } = useSelector(state => state.filtro)

  const options = [
    {
      label: "PRIMARIAS",
      id: "PRIMARIAS"
    },
  ]

  const handleChecked = ev => {
    const { value, checked } = ev.target;
    if (value != "all") {
      dispatch({
        type: type.SET_CABECERAS,
        payload: cabeceras.includes(value)
          ? cabeceras.filter(c => c !== value)
          : [...cabeceras, value]
      })
    } else {
      dispatch({
        type: type.SET_CABECERAS,
        payload: cabeceras.length > 0 ? [] : [...options.map(e => (e.id))]
      })
    }
  };

  return (
    <Accordion
      square
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
        aria-controls="additional-actions1-content"
        id="additional-actions1-header"
      >
        <FormControlLabel
          aria-label="Acknowledge"
          value="all"
          onClick={(event) => event.stopPropagation()}
          onFocus={(event) => event.stopPropagation()}
          control={
            <CheckboxNew
              onChange={handleChecked}
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<RadioButtonCheckedIcon />}
              checked={cabeceras.length > 0 ? true : null}
            />
          }
          label=""
        />
        <p>CABECERAS PRIMARIAS</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {options.map(cab => (
            <FormControlLabel
              key={cab.id}
              value={cab.id}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={cabeceras.includes(cab.id)}
                />
              }
              label={cab.label}
              labelPlacement='end'
            />
          ))}
        </CheckboxFilter>
      </AccordionDetails>
    </Accordion>
  );
};

export default FiltroCabeceras;
