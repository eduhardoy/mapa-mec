import React from 'react';
import styled from "styled-components";

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import CheckboxList from './Checkbox';

const FiltrosStyle = styled.div `
margin-top: 5px;
border-bottom-left-radius: 0;
border-bottom-right-radius: 0;
div{
  div{
    div{
      div{
        p{
      text-align: center;
      font-family: "Lato", sans-serif;
      font-size: 16px;
      font-weight: 700;
      width: 100%;
      flex-basis: 100%;
      text-transform: uppercase;
    }
      }
    }
  }
}`


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <FiltrosStyle>
    <div className={classes.root}>
      <Accordion className="test" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Departamentos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CheckboxList/>
        </AccordionDetails>
      </Accordion>
      
    </div>
    </FiltrosStyle>
  );
}