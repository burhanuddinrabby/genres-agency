import BannerComponent from "./Main/Banner";
import OurServices from "./Main/OurServices";
import WhyUs from "./Main/WhyUs";
import Navbar from "./Shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <BannerComponent></BannerComponent>
      <OurServices></OurServices>
      <WhyUs></WhyUs>
    </div>
  )
}
