// import img1 from '../assets/1.webp'
import img2 from '../assets/2.webp'
import img3 from '../assets/3.webp'
import img4 from '../assets/4.webp'
import img5 from '../assets/5.svg'

const About = () => {
  return (
    <div className=" mt-[50px]">
        <div className="flex justify-center lg:py-12 flex-wrap items-center lg:space-x-20 space-x-10">
         
          <img src={img2} className = 'lg:w-[198px] md:w-[100px] w-[70px]  lg:h-[99px]' alt="" />
          <img src={img3} className = 'lg:w-[198px]  md:w-[100px] w-[70px]   lg:h-[139px]' alt="" />
          <img src={img4} className = 'lg:w-[132px] md:w-[100px] w-[70px]   lg:h-[113px]' alt="" />
          <img src={img5} className = 'lg:w-[132px] md:block hidden md:w-[100px] w-[70px]   lg:h-[113px]' alt="" />
         
        </div>
            
    </div>
  )
}

export default About