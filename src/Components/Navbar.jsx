// import logo from '../assets/ToyotaLogo_Olympics_Paralympics.svg'
import {RxHamburgerMenu} from 'react-icons/rx'
const Navbar = () => {
  return (
    <header>
      <div className="bg-white py-5 z-20 shadow">
        <div className="flex justify-between items-center px-5 md:px-20">
          <div className="logo">
            {/* <img src={logo} className='w-[200px] h-[37px]'/> */}
            <h1 className="text-2xl"> Logo</h1>
          </div>
          <div className="">
            <ul className="md:flex hidden space-x-14 pr-10 text-[17px] font">
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>
<div className="md:hidden relative">
<RxHamburgerMenu className='text-3xl'/>
</div>
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;
