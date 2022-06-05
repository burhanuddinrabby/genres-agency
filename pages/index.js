import Helmet from "react-helmet";
import BannerComponent from "./Main/Banner";
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
      <Helmet>
        <title>HOME | GenRes</title>
      </Helmet>
      <Navbar></Navbar>
      <BannerComponent></BannerComponent>
      <OurServices></OurServices>
      <WhyUs></WhyUs>
      <OurWork></OurWork>
      <Testimonial></Testimonial>
      <GotAProject></GotAProject>
      <Footer></Footer>
    </div>
  )
}
