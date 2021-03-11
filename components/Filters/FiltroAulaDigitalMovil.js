import React from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { Checkbox } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch, useSelector } from "react-redux";
import * as type from '../../redux/types';

const CheckboxFilter = styled.div`
  label {
    width: 50%;
    margin: 0;
  }
`;

const CheckboxNew = styled(Checkbox)`
  span {
    color: #7cb342;
  }
`;

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

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
