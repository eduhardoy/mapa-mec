import App from "next/app";
import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../redux/store";
import { createWrapper } from "next-redux-wrapper";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Mapa Educativo</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
