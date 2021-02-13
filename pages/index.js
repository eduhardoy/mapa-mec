import * as React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import LeftSideBarMenu from "../components/LeftSideBar";
import axios from "axios";
import Map from "../components/Map";
import * as type from "../redux/types";
import { wrapper } from "../redux/store";


export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    // LOCALIZACIONES
    const localizaciones = await axios.get(
      "http://200.10.111.88:1337/localizaciones"
    );
    store.dispatch({
      type: type.LOAD_LOCALIZACIONES,
      payload: localizaciones.data,
    });

    //IMAGENES
    const images = await axios.get("http://200.10.111.88:1337/imagenes");
    store.dispatch({ type: type.LOAD_IMAGES, payload: images.data });

    //DEPARTAMENTOS
    const departamentos = await axios.get(
      "http://200.10.111.88:1337/departamentos"
    );
    store.dispatch({
      type: type.LOAD_DEPARTAMENTOS,
      payload: departamentos.data,
    });

    //LOCALIDADES 
    const localidades = await axios.get(
      "http://200.10.111.88:1337/localidades"
    );
    store.dispatch({
      type: type.LOAD_LOCALIDADES,
      payload: localidades.data,
    });

    // ESTADOS
    const estados = await axios.get(
      "http://200.10.111.88:1337/estados"
    );
    store.dispatch({
      type: type.LOAD_ESTADOS,
      payload: estados.data,
    });

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
