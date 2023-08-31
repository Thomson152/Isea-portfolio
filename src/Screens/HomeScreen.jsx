// import Banner from "../Components/Banner"
import About from "../Components/About"
import Banner from "../Components/Banner"
import BgVideo from "../Components/BgVideo"
import Navbar from "../Components/Navbar"
import Tab from "../Components/Tab"
import Tools from "../Components/Tools"


const HomeScreen = () => {
  return (
    <div>
        <Navbar/>
        
        <BgVideo/>
        <About/>
   
        <Banner/>
        <Tools/>
        <Tab/>

    </div>
  )
}

export default HomeScreen