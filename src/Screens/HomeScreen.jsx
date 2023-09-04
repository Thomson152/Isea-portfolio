// import Banner from "../Components/Banner"
import About from "../Components/About";
import Banner from "../Components/Banner";
import BgVideo from "../Components/BgVideo";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Tab from "../Components/Tab";
import Tools from "../Components/Tools";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <BgVideo />
      <Contact />
      <Banner />
      <Tab />
      <Footer />
    </div>
  );
};

export default HomeScreen;
