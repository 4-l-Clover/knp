import { useEffect } from "react";
import "../styles/globals.css";
import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "../theme";
import { createEmotionCache } from "../utils/create-emotion-cache";
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  useEffect(() => {
    AOS.init({
      // easing: "ease-out-cubic",
      once: true,
      duration: 500,
      // offset: 50,
    });
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          Logistics & Supply Chain Platform: Shipping & Customs AI | KlearNow
        </title>
        <meta
          name="description"
          content="KlearNow provides a solution for logistics and supply chain management, with an AI platform for shipping and customs companies."
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={createTheme({})}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
