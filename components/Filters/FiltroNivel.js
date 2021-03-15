import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch, useSelector } from "react-redux";
import * as type from '../../redux/types';
import { Accordion, AccordionSummary, AccordionDetails, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroNivel = () => {

  const dispatch = useDispatch()
  const { niveles } = useSelector(state => state.filtro)

  const options = [
    { value: "152,155,121,122,100,101", id: "inicial", title: "INCIAL" },
    { value: "136,123,126,140,102,105,153,156,158", id: "primaria", title: "PRIMARIA" },
    { value: "143,144,108,109,110,111,129,130,147,148,151,154,157,159,131,132,149,150,138", id: "secundaria", title: "SECUNDARIA" },
    { value: "117,115", id: "superior", title: "SUPERIOR" }
  ]

  const handleChecked = ev => {
    const { value, checked } = ev.target;
    let valueInArray = value.split(",")

    if (value != "all") {
      dispatch({
        type: type.SET_NIVEL,
        payload: niveles.some(c => valueInArray.includes(c))
          ? [...niveles.filter(c => !valueInArray.includes(c))]
          : [...niveles, ...valueInArray]
      })
    } else {
      dispatch({
        type: type.SET_NIVEL,
        payload: niveles.length > 0 ? [] : (() => {
          const arrNiveles = [...options.map((e) => e.value.split(","))]
          let aux = []
          arrNiveles.forEach((e) => aux = aux.concat(e))
          return aux
        })()
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
              checked={niveles.length > 0 ? true : null}
            />
          }
          label=''
        />
        <p>NIVEL</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {options.map(dep => (
            <FormControlLabel
              key={dep.id}
              value={dep.value}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={niveles.some(n => dep.value.split(",").includes(n))}
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

export default FiltroNivel;
