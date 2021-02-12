import React from "react";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import useLocalizaciones from "../../hooks/Localizaciones";

const FilterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: center;
  align-items: center;
  font-family: "Lato";
`;

const Item = styled.li`
  font-family: "Lato";
  font-size: 15px;
  padding: 10px;
`;

const ItemList = styled.ul`
  width: 100%;
`;

const useStyles = makeStyles(theme => ({
  input: {
    padding: 15,
    width: "100%",
    height: "100%",
    outline: "none",
    border: "none",
    fontFamily: "Lato",
    fontSize: 15,
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
  const [localizaciones] = useLocalizaciones();
  const classes = useStyles();
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    options: localizaciones.filter(e => e.colegio),
    getOptionLabel: option => option.colegio.nombre,
  });

  return (
    <FilterContainer>
      <input
        placeholder='INGRESAR COLEGIO'
        className={classes.input}
        {...getInputProps()}
      />
      {groupedOptions.length > 0 ? (
        <ItemList className={classes.listbox} {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <Item {...getOptionProps({ option, index })}>
              {option.colegio.nombre}
            </Item>
          ))}
        </ItemList>
      ) : null}
    </FilterContainer>
  );
}
