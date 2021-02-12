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
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import useDepartamentosFiltro from "../../hooks/DepartamentosFiltro";

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

const FiltroDepartamentos = ({ departamentos, setDepartamentosFilter }) => {
  const [expanded, setExpanded] = React.useState();
  const [checkedId, setCheckedId] = useDepartamentosFiltro();

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChecked = ev => {
    const { value, checked } = ev.target;
    setCheckedId(
      checkedId.includes(parseInt(value))
        ? checkedId.filter(c => c !== parseInt(value))
        : [...checkedId, parseInt(value)]
    );
    if (value == "all") {
      let ids = [];
      if (checked) departamentos.forEach(dep => ids.push(dep.id));
      setCheckedId(ids);
    }
  };

  React.useEffect(() => {
    setDepartamentosFilter(checkedId);
  }, [checkedId]);

  return (
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
          value='all'
          onClick={event => event.stopPropagation()}
          onFocus={event => event.stopPropagation()}
          control={
            <CheckboxNew
              onChange={handleChecked}
              icon={<RadioButtonCheckedIcon />}
              checkedIcon={<RadioButtonCheckedIcon />}
            />
          }
          label=''
        />
        <p>DEPARTAMENTOS</p>
      </AccordionSummary>
      <AccordionDetails>
        <CheckboxFilter>
          {departamentos.map(dep => (
            <FormControlLabel
              key={dep.id}
              value={dep.id}
              control={
                <CheckboxNew
                  onChange={handleChecked}
                  checked={checkedId.includes(dep.id)}
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

const mapStateToPros = state => ({
  departamentos: state.departamento.departamentos,
});

const mapDispatchToProps = dispatch => ({
  setDepartamentosFilter: arg =>
    dispatch({ type: "SET_DEPARTAMENTOS", payload: arg }),
});

export default connect(mapStateToPros, mapDispatchToProps)(FiltroDepartamentos);
