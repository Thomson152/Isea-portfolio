// import logo from '../assets/ToyotaLogo_Olympics_Paralympics.svg'
import { FaPhoneAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <header>
      <div className="bg-[#080a11]  py-5 z-20 shadow">
        <div className="lg:flex hidden justify-between  items-center px-5 md:px-8">
          <div className="logo flex space-x-7">
            <h1 className="text-2xl text-white font"> Logo</h1>
            <h1 className="text-white lg:block hidden font text-3xl">
              Think Web. Think Smart.
            </h1>
          </div>
          <div className="">
            <h1 className="text-white lg:block hidden font text-3xl">
              Let's Talk <span className="text-yellow-500">201-870-6000</span>{" "}
            </h1>
          </div>
        </div>

        <div className=" flex justify-between px-5 items-center">
          <h1 className="text-2xl text-white font"> Logo</h1>
          <div className="">
            <a href="tel:091-680-342-28">
              <FaPhoneAlt className="text-yellow-500 text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
