import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch, useSelector } from "react-redux";
import * as type from '../../redux/types';
import { Accordion, AccordionSummary, AccordionDetails, CheckboxFilter, CheckboxNew } from "./styles";

const FiltroLocalidades = () => {

  const dispatch = useDispatch()
  const { localidades: localidadesFiltro, localidadesFiltered, departamentos } = useSelector(state => state.filtro)
  const { localidades } = useSelector(state => state.precarga)

  React.useEffect(() => {
    dispatch({
      type: type.PUT_LOCALIDADES_FILTERED,
      payload: [...localidades.filter(c => departamentos.includes(c.departamento.id.toString()))]
    })
  }, [departamentos])

  const handleChecked = ev => {
    const { value, checked } = ev.target;
    if (value != "all") {
      dispatch({
        type: type.SET_LOCALIDADES,
        payload: localidadesFiltro.includes(value)
          ? localidadesFiltro.filter(e => e !== value)
          : [...localidadesFiltro, value]
      })
    } else {
      dispatch({
        type: type.SET_LOCALIDADES,
        payload: localidadesFiltro.length > 0
          ? []
          : [...localidadesFiltered.map(e => (e.id.toString()))]
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
              checked={localidadesFiltro.length > 0 ? true : null}
            />
          }
          label=''
        />
        <p>LOCALIDADES*</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {localidadesFiltered.map(dep => (
            <FormControlLabel
              key={dep.id}
              value={dep.id}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={localidadesFiltro.includes(dep.id.toString())}
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

export default FiltroLocalidades;
