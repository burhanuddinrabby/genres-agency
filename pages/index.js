import Head from "next/head";
import Banner from "./Main/Banner";
import GotAProject from "./Main/GotAProject";
import OurServices from "./Main/OurServices";
import OurWork from "./Main/OurWork";
import Testimonial from "./Main/Testimonial";
import WhyUs from "./Main/WhyUs";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import preview from "../public/image/preview.png"

export default function Home() {
  return (
    <div>
      <Head>
        <title>HOME | GenRes</title>
        <meta property="og:title" content="genres"/>
        <meta property="og:description" content="we quickly generate your crucial results"/>
        <meta property="og:image" content="https://i.ibb.co/FWSpk8G/preview.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
      </Head>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurServices></OurServices>
      <WhyUs></WhyUs>
      <OurWork></OurWork>
      <Testimonial></Testimonial>
      <GotAProject></GotAProject>
      <Footer></Footer>
    </div>
  )
}
