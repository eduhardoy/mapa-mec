import React from "react";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import usePrecargado from "../../hooks/Precargado";

//ICONS
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const FilterContainer = styled.div`
  width: 85%;
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
  width: 300px;
  margin: 0;
  padding: 0;
  z-index: 999;
  position: absolute;
  top: 71px;
  list-style: none;
  background-color: white;
  overflow: auto;
  max-height: 200px;

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

  @media (max-width: 426px) {
    width: 100%;
    left: 0;
    top: 120px;
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

const Tag = styled(({ label, onDelete, ...props }) => (
  <div {...props}>
    <span>{label}</span>
    <CloseIcon onClick={onDelete} />
  </div>
))`
display: flex;
align-items: center;
height: 24px;
margin: 2px;
line-height: 22px;
background-color: #fafafa;
border: 1px solid #e8e8e8;
border-radius: 2px;
box-sizing: content-box;
padding: 0 4px 0 10px;
outline: 0;

&:focus {
  border-color: #40a9ff;
  background-color: #e6f7ff;
}

& span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

& svg {
  font-size: 12px;
  cursor: pointer;
  padding: 4px;
}
`;

export default function Filter() {
  const { localizaciones } = usePrecargado();
  const classes = useStyles();
  const {
    getRootProps,
    getInputLabelProps,
    getTagProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    value,
    groupedOptions,
  } = useAutocomplete({
    options: localizaciones.filter(e => e.colegio),
    getOptionLabel: option => option.colegio.nombre,
    multiple: true
  });

  return (
    <FilterContainer>
      <FilterInput
        placeholder='INGRESAR COLEGIO'
        className={classes.input}
        {...getInputProps()}
      />
      {value.map((option, index) => (
        <Tag label={option.colegio.nombre} {...getTagProps({ index })} />
      ))}
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
