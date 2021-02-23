import * as React from "react";
import styled from "styled-components";
import FilterBar from "./FilterBar";
import SpecialFilterBar from "./SpecialFilterBar";
import FirstBar from "./FirstBar.js";
import InfoBar from "./InfoBar.js";
import ToolsBar from "./ToolsBar.js";
import { connect } from "react-redux";

// styles

const LeftSideBarMenuStyle = styled.div`
  display: flex;
`;

// markup
const LeftSideBarMenu = ({ firstBar, secondBar }) => {
  return (
    <LeftSideBarMenuStyle>
      {firstBar && <FirstBar />}
      <FilterBar />
      <SpecialFilterBar />
      <InfoBar />
      <ToolsBar />
    </LeftSideBarMenuStyle>
  );
};

const mapStateToProps = state => ({
  firstBar: state.bar.firstBar,
  secondBar: state.bar.secondBar,
});

const mapDispatchToProps = dispatch => ({
  selectFirstBar: arg => dispatch(selectFirstBar(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftSideBarMenu);
