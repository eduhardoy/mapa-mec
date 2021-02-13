import React from "react";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import usePrecargado from "../../hooks/Precargado";

const FilterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: center;
  align-items: center;
  font-family: "Lato";
`;

const useStyles = makeStyles(theme => ({
  input: {
    padding: 15,
    width: "100%",
    height: "100%",
    outline: "none",
    border: "none",
  },
  listbox: {
    width: 275,
    margin: 0,
    padding: 0,
    zIndex: 1,
    position: "absolute",
    top: "80%",
    listStyle: "none",
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
    maxHeight: 200,
    border: "1px solid rgba(0,0,0,.25)",
    '& li[data-focus="true"]': {
      backgroundColor: "#4a8df6",
      color: "white",
      cursor: "pointer",
    },
    "& li:active": {
      backgroundColor: "#2977f5",
      color: "white",
    },
  },
}));

export default function Filter() {
  const { localizaciones } = usePrecargado();
  const classes = useStyles();
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: localizaciones,
    getOptionLabel: option => option.nombre,
  });

  return (
    <FilterContainer>
      <input
        placeholder='HOLA'
        className={classes.input}
        {...getInputProps()}
      />
      {groupedOptions.length > 0 ? (
        <ul className={classes.listbox} {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>{option.title}</li>
          ))}
        </ul>
      ) : null}
    </FilterContainer>
  );
}