import Helmet from "react-helmet";
import BannerComponent from "./Main/Banner";
import OurServices from "./Main/OurServices";
import OurWork from "./Main/OurWork";
import WhyUs from "./Main/WhyUs";
import Navbar from "./Shared/Navbar";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Navbar></Navbar>
      <BannerComponent></BannerComponent>
      <OurServices></OurServices>
      <WhyUs></WhyUs>
      <OurWork></OurWork>
    </div>
  )
}
