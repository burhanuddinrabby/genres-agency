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
        {/* <meta property="og:title" content="GenRes" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://genres-agency.vercel.app/" />
        <meta data-n-head="ssr" data-hid="og:image" name="og:image" content="https://i.ibb.co/FWSpk8G/preview.png" />
        <meta data-n-head="ssr" data-hid="og:locale" name="og:locale" content="en_US" />
        <meta property="og:description" content="We quickly generate your crucial results" /> */}

        {/* <!-- Primary Meta Tags --> */}
        <title>Home | GenRes</title>
        <meta name="title" content="GenRes" />
        <meta name="description" content="We quickly generate your crucial results" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://genres-agency.vercel.app/" />
        <meta property="og:title" content="GenRes" />
        <meta property="og:description" content="We quickly generate your crucial results" />
        <meta property="og:image" content="https://i.ibb.co/FWSpk8G/preview.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://genres-agency.vercel.app/" />
        <meta property="twitter:title" content="GenRes" />
        <meta property="twitter:description" content="We quickly generate your crucial results" />
        <meta property="twitter:image" content="https://i.ibb.co/FWSpk8G/preview.png" />
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
