import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Accordion } from "@material-ui/core";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { AccordionSummary } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styled from "styled-components";

const StyledInfoWrapper = styled.div`
  width: 100%;
  margin: 0px;
  padding: 0px;
`;

const StyledAccordion = styled(Accordion)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px;
  box-sizing: border-box;
  flex-direction: column;
  box-shadow: none !important;
  border-bottom: 1px #ededed solid;
  border-radius: 0px !important;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 0px;
`;

const LogoFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  img {
    width: 32px;
  }
`;

const TituloFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 90%;
  margin-left: 15px;
  h3 {
    font-weight: 700;
    font-size: 16px;
    margin: 5px;
  }
  p {
    font-size: 14px;
    margin: 5px;
    color: grey;
  }
`;

const Elemento = styled.h4``;

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <StyledInfoWrapper>
      <StyledAccordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <StyledAccordionSummary
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <LogoFilter>
            <img src='./images/pinSecu.png' alt='' />
          </LogoFilter>
          <TituloFilter>
            <h3>COLEGIO MANUEL BELGRANO DE EMPEDRADO NUMERO 654</h3>
            <p>CUEANEXO 945015848</p>
          </TituloFilter>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
    </StyledInfoWrapper>
  );
}
