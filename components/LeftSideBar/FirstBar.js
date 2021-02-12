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
    width: 18vw;
    max-width: none;
    div {
      ul {
        li {
          button {
            width: 100%;
            p {
              display: flex;
              width: 60%;
            }
          }
        }
      }
    }
  }
  :focus {
    width: 15vw;
    max-width: none;
  }
`;

const FirstBarStyle = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const ButtonList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

const ButtonItem = styled.li`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  flex-direction: column;
  :hover {
    button {
      background-color: #f6faf1;
      color: #7cb342;
      svg {
        color: #7cb342;
      }
    }
  }
`;

const IconButton = styled.button`
  width: 100%;
  padding: 0;
  height: 100%;
  display: flex;
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

const ButtonText = styled.p`
  display: none;
  font-size: 18px;
  font-family: "Lato";
  padding-left: 30px;
`;

// markup
const FirstBar = ({ selectBar, secondBar }) => {
  return (
    <FirstBarContainer>
      <FirstBarStyle>
        <ButtonList>
          <ButtonItem>
            <IconButton
              onClick={() =>
                selectBar({ bar: !secondBar.bar, selected: "FILTROS" })
              }
            >
              <TuneIcon />
              <ButtonText>Filtros</ButtonText>
            </IconButton>
          </ButtonItem>
          <ButtonItem>
            <IconButton>
              <InfoIcon />
              <ButtonText>Información</ButtonText>
            </IconButton>
          </ButtonItem>
        </ButtonList>
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
