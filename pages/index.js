import * as React from "react";
import styled from "styled-components"
import Layout from "../components/Layout";
import Header from "../components/Header";
import LeftSideBarMenu from "../components/LeftSideBarMenu";


import Map from '../components/Map'

// markup
const IndexPage = () => {
  return (
    <Layout>
    <div>
      <Header/>
      <Map />
      <LeftSideBarMenu/>
    </div>
    </Layout>
  );
};

export default IndexPage;
