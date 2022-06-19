import Head from "next/head";
import Banner from "./Main/Banner";
import GotAProject from "./Main/GotAProject";
import OurServices from "./Main/OurServices";
import OurWork from "./Main/OurWork";
import Testimonial from "./Main/Testimonial";
import WhyUs from "./Main/WhyUs";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

export default function Home() {
  return (
    <div>
      <Head>

        <title>Home | GenRes</title>
        <meta name="title" content="GenRes" />
        <meta name="description" content="We quickly generate your crucial results" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://genres-agency.vercel.app/" />
        <meta data-n-head="ssr" data-hid="og:image" name="og:image"
          content="https://i.ibb.co/FWSpk8G/preview.png" />
        <meta data-n-head="ssr" data-hid="og:title" name="og:title" content="Truth or Dare Bot" />
        <meta property="og:description" />
        <meta property="og:title" content="GenRes" />
        <meta property="og:description" content="We quickly generate your crucial results" />
        <meta property="og:image" content="https://i.ibb.co/FWSpk8G/preview.png" />

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
