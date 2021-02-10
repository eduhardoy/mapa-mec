import * as React from "react";
import styled from "styled-components";
import MapIcon from "@material-ui/icons/Map";
import InfoIcon from "@material-ui/icons/Info";
import { connect } from "react-redux";
import { selectBar } from "../../redux/actions/BarActions";

// styles
const FirstBarStyle = styled.div`
  width: 100%;
  height: 60%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const IconButton = styled.button`
  width: 100%;
  height: 15%;
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover {
    svg {
      width: 90%;
    }
  }
  :focus {
    border: none;
    outline: none;
    svg {
      width: 90%;
    }
  }
  svg {
    width: 70%;
    color: #666666;
    height: auto;
    margin: 0;
  }
`;

// markup
const FirstBar = ({ selectBar, secondBar }) => {
  return (
    <FirstBarStyle>
      <IconButton
        onClick={() => selectBar({ bar: !secondBar.bar, selected: "FILTROS" })}
      >
        <MapIcon />
      </IconButton>
      <IconButton>
        <InfoIcon />
      </IconButton>
    </FirstBarStyle>
  );
};

const mapStateToProps = state => ({
  firstBar: state.bar.firstBar,
  secondBar: state.bar.secondBar,
});

const mapDispatchToProps = dispatch => ({
  selectBar: arg => dispatch(selectBar(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstBar);
