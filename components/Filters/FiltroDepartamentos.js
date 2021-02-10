import React from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { Checkbox } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

const FiltrosNew = ({ departamentos }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label='Expand'
          aria-controls='additional-actions1-content'
          id='additional-actions1-header'
        >
          <FormControlLabel
            aria-label='Acknowledge'
            onClick={event => event.stopPropagation()}
            onFocus={event => event.stopPropagation()}
            control={<CheckboxNew />}
            label=''
          />
          <p>DEPARTAMENTOS</p>
        </AccordionSummary>
        <AccordionDetails>
          <CheckboxFilter>
            {departamentos.map(dep => (
              <FormControlLabel
                value={dep.id}
                control={<CheckboxNew />}
                label={dep.nombre}
                labelPlacement='end'
              />
            ))}
          </CheckboxFilter>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const mapStateToPros = state => ({
  departamentos: state.departamento.departamentos,
});

export default connect(mapStateToPros, null)(FiltrosNew);
