import React from "react";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import NoSsr from "@material-ui/core/NoSsr";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import usePrecargado from "../../hooks/Precargado";

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled("div")`
  width: 300px;
  background-color: #fff;
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: #40a9ff;
  }

  &.focused {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    font-size: 14px;
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`;

const Listbox = styled("ul")`
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected="true"] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus="true"] {
    background-color: #e6f7ff;
    cursor: pointer;

    & svg {
      color: #000;
    }
  }
`;

const StyledTag = styled.div`
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
  overflow: hidden;

  .tooltip {
    position: fixed;
    top: 7%;
    left: 50%;
    z-index:9999;
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
  }

  &:hover {
    background-color: rgba(255, 50, 20, 0.4);
  }

  &:hover .tooltip {
    visibility: visible;
    z-index: 9999999;
  }

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

const Tag = ({ label, onDelete }) => (
  <StyledTag onClick={onDelete}>
    <span>{label}</span>
    <span className="tooltip">{label}</span>
  </StyledTag>
);

export default function Filter3() {
  const { localizaciones } = usePrecargado();

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    multiple: true,
    options: localizaciones.filter((e) => e.colegio),
    getOptionLabel: (option) => option.colegio.nombre,
    disableCloseOnSelect: true,
  });

  return (
    <ComboBox>
      <div {...getRootProps()}>
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {value.map((option, index) => (
            <Tag label={option.colegio.nombre} {...getTagProps({ index })} />
          ))}

          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option.colegio.nombre}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
    </ComboBox>
  );
}

const ComboBox = styled.div`
  height: 100%;

  & div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: color-interpolation-filters;

    & div {
      //InputWrapper
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: nowrap;
      position: relative;

      & div {
        width: 80%;
        height: 90%;
        /* min-width:60%; */
        margin-left: 4px;
        margin-right: 4px;
        border-radius: 8px;
        z-index: 1;
      }

      & input {
        position: absolute;
        z-index: 0;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
      }
    }
  }
`;
