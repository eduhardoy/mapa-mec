import React from 'react';
import styled from "styled-components";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';


const CheckboxStyle = styled.div `
margin: 0px;
width: 100%;
ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  div{
    padding: 0px;
    width: 50%;
    div{
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      span{
        font-family: "Lato";
        font-size: 16px;
        width: 60%;
      }
      div{
      span {
        color: #7CB342;
        padding: 0;
        width: 20%;
      }
      }
      }
    }
}`


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <CheckboxStyle>
    <List className={classes.root}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
            <div>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            </div>
            <ListItemText id={labelId} primary={`Mburucuya`} />
          </ListItem>
        );
      })}
    </List>
    </CheckboxStyle>
  );
}