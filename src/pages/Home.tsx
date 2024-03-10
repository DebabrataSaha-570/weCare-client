import AboutUs from "../components/ui/home/AboutUs";
import Banner from "../components/ui/home/Banner";
import Gallery from "../components/ui/home/Gallery";
import LatestNews from "../components/ui/home/LatestNews";
import SubHeader from "../components/ui/home/SubHeader";
import SupplyShowcase from "../components/ui/home/SupplyShowcase";
import Testimonials from "../components/ui/home/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SubHeader></SubHeader>
      <AboutUs></AboutUs>
      <SupplyShowcase></SupplyShowcase>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
