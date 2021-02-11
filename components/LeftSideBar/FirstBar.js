import * as React from "react";
import styled from "styled-components";
import TuneIcon from "@material-ui/icons/Tune";
import InfoIcon from "@material-ui/icons/Info";
import { connect } from "react-redux";
import { selectBar } from "../../redux/actions/BarActions";

// styles
const FirstBarContainer = styled.div`
  background-color: #fff;
  /* border-right: solid #d3d3d3 2px; */
  height: calc(100vh - 77px);
  width: 5vw;
  z-index: 10;
  margin: 0;
  padding: 0;
  box-shadow: 1px 0px 5px 1px rgba(53, 53, 53, 0.25);
  :hover {
    width: 15vw;
    max-width: none;
  }
  :focus {
    width: 15vw;
    max-width: none;
  }
`;

const FirstBarStyle = styled.div`
  width: 100%;
  height: 60%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ButtonList = styled.ul``;

const ButtonItem = styled.li``;

const IconButton = styled.button`
  width: 100%;
  height: 15%;
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  svg {
    width: 30px;
    color: #666666;
    height: auto;
    margin: 0;
  }
`;

// markup
const FirstBar = ({ selectBar, secondBar }) => {
  return (
    <FirstBarContainer>
      <FirstBarStyle>
        <IconButton
          onClick={() =>
            selectBar({ bar: !secondBar.bar, selected: "FILTROS" })
          }
        >
          <TuneIcon />
        </IconButton>
        <IconButton>
          <InfoIcon />
        </IconButton>
      </FirstBarStyle>
    </FirstBarContainer>
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
