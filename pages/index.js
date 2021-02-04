import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Header from "../components/Header";
import LeftSideBarMenu from "../components/LeftSideBarMenu";
import axios from "axios";
import Map from "../components/Map";
import { useDispatch } from "react-redux";
import * as type from "../redux/types";
import { wrapper } from "../redux/store";

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const localizaciones = await axios.get(
      "http://200.10.111.88:1337/localizaciones"
    );
    const images = await axios.get("http://200.10.111.88:1337/imagenes");
    store.dispatch({
      type: type.LOAD_LOCALIZACIONES,
      payload: localizaciones.data,
    });
    store.dispatch({ type: type.LOAD_IMAGES, payload: images.data });
    return { props: {} };
  }
);

// markup
const IndexPage = () => {

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
