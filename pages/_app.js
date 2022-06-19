import "../styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 4,
  color: "#0569FF",
  className: "z-50",
  delay: "100",
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
    Router.events.on("routeChangeStart", progress.start);
    Router.events.on("routeChangeComplete", progress.finish);
    Router.events.on("routeChangeError", progress.finish);
  }, []);
  return (<>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp;
