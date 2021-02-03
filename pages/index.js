import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Header from "../components/Header";
import LeftSideBarMenu from "../components/LeftSideBarMenu";

import Map from "../components/Map";
import { useDispatch } from "react-redux";
import { fetchLocalizaciones } from "../redux/actions/LocalizacionesActions";

// markup
const IndexPage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchLocalizaciones());
  }, []);

  return (
    <Layout>
      <div>
        <Header />
        <Map />
        <LeftSideBarMenu />
      </div>
    </Layout>
  );
};

export default IndexPage;
