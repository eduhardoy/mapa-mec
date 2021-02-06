import * as React from "react";
import styled from "styled-components";
import SecondBar from "../SecondBar";
import FirstBar from "../FirstBar";
import { connect } from "react-redux";

// styles

const LeftSideBarMenuStyle = styled.div`
  display: flex;
`;

const FirstBarContainer = styled.div`
  background-color: #fff;
  /* border-right: solid #d3d3d3 2px; */
  height: calc(100vh - 77px);
  width: 4vw;
  min-width: 40px;
  max-width: 55px;
  z-index: 10;
  margin: 0;
  padding: 0;
  box-shadow: 1px 0px 5px 1px rgba(53, 53, 53, 0.25);
`;

// markup
const LeftSideBarMenu = ({ firstBar, secondBar }) => {
  return (
    <LeftSideBarMenuStyle>
      {firstBar && (
        <FirstBarContainer>
          <FirstBar />
        </FirstBarContainer>
      )}
      {secondBar.bar && <SecondBar />}
    </LeftSideBarMenuStyle>
  );
};

const mapStateToProps = (state) => ({
  firstBar: state.bar.firstBar,
  secondBar: state.bar.secondBar,
});

const mapDispatchToProps = (dispatch) => ({
  selectFirstBar: (arg) => dispatch(selectFirstBar(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftSideBarMenu);
