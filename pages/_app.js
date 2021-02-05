import React from "react";
import { wrapper } from "../redux/store";
import Head from "next/head";
import App from "next/app";

//Metricas
export function reportWebVitals(metric){
  console.log(metric)
}

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
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <meta 
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <title>Mapa Educativo</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default wrapper.withRedux(MyApp);
