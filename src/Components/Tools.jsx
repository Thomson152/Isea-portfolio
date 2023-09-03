import { AiOutlineCamera} from "react-icons/ai";
import { RiBlenderLine} from "react-icons/ri";
import {SiAdobeacrobatreader} from 'react-icons/si'
import {DiPhotoshop} from 'react-icons/di'
const Tools = () => {
  return (
    <div className="mt-[100px] lg:px-20 px-5 mb-5 ">
      <div className="">
        <h1 className="text-center text-[25px] text-slate-600 lg:text-[38px] font  ">
         
        </h1>
      </div>

      <div className="max-w-[1750px] bg-[#fbfbfb]
       mt-9 border py-7">
        <div className="grid grid-cols-2 space-y-2 lg:grid-cols-4">
          <div className="flex flex-col  border-r  border-b lg:border-b-0 space-y-5 py-[30px] items-center">
            <RiBlenderLine className="lg:text-3xl text-blue-800  text-2xl"/>
            <h3 className="lg:text-[20px] text-[16px] font">Blender</h3>
          </div>

          <div className="flex flex-col  border-r border-b lg:border-b-0 space-y-5 py-[30px] items-center">
            <AiOutlineCamera className="text-3xl text-blue-800 "/>
            <h3 className="lg:text-[20px] text-[16px]  font">Camera</h3>
          </div>

          <div className="flex flex-col  border-r space-y-5   py-[30px] items-center">
            <SiAdobeacrobatreader className="text-3xl text-blue-800 "/>
            <h3 className="lg:text-[20px] text-[16px] font">Adobe</h3>
          </div>

          <div className="flex flex-col  border-r   space-y-5 py-[30px] items-center">
            <DiPhotoshop className="text-3xl text-blue-800 "/>
            <h3 className="lg:text-[20px] text-[16px] font">Photoshop</h3>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Tools;
