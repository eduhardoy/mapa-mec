import React from "react";
import { wrapper } from "../redux/store";
import Head from "next/head";
import App from "next/app";
import { fetchLocalizaciones } from "../redux/actions/LocalizacionesActions";

class MyApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        // Some custom thing for all pages
        pathname: ctx.pathname,
      },
    };
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Mapa Educativo</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default wrapper.withRedux(MyApp);
