import React from "react";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import usePrecargado from "../../hooks/Precargado";

const FilterContainer = styled.div`
  width: 320px;
  height: 100%;
  display: flex;
  flex-direction: center;
  align-items: center;
  font-family: "Lato";
`;

const FilterInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-family: "Lato";
  padding: 15px;
  font-size: 15px;
`;

const Item = styled.li`
  font-family: "Lato";
  font-size: 15px;
  padding: 10px;
`;

const ItemList = styled.ul`
  width: 321px;
  margin: 0;
  padding: 0;
  z-index: 1;
  position: absolute;
  top: 80%;
  list-style: none;
  background-color: white;
  overflow: auto;
  max-height: 200px;
  box-sizing: border-box;
  border: solid 1px #337e3c;

  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #666666;
  }
`;

const useStyles = makeStyles(theme => ({
  listbox: {
    '& li[data-focus="true"]': {
      backgroundColor: "#d7f4b4",
      cursor: "pointer",
    },
    "& li:active": {
      backgroundColor: "rgb(124,179,66)",
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
    options: localizaciones.filter(e => e.colegio),
    getOptionLabel: option => option.colegio.nombre,
  });

  return (
    <FilterContainer>
      <FilterInput
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
