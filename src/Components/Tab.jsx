import { useState } from "react";
import v1 from "../assets/7up.mp4";
// import viva from '../assets/viva.mp4'
import v2 from "../assets/pepsi.mp4";
const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="mt-[100px] bg-[#070e29] h-fit py-24 px-5 lg:px-0 flex flex-col justify-center items-center">

      <h1 className="text-3xl text-white mb-10 font">Our Works</h1>
      <div className="lg:w-[800px]  lg:h-[500px] ">
        <div className={`${toggleState === 1 ? "block" : "hidden"}`}>
          <video
            src={v1}
            className="w-full h-[500px]    object-cover"
            autoPlay
            loop
            muted
            controls
          ></video>
        </div>

        <div className={`${toggleState === 2 ? "block" : "hidden"}`}>
          <video
            src={v2}
            className="w-full h-[500px]    object-cover"
            autoPlay
            loop
            muted
            controls
          ></video>
        </div>

        <div className={`${toggleState === 3 ? "block" : "hidden"}`}>
          <video
            src={v1}
            className="w-full h-[500px]    object-cover"
            autoPlay
            loop
            muted
            controls
          ></video>
        </div>
      </div>

      <div className="">
        <ul className="flex space-x-5  ">
          <li>
            <button
              onClick={() => toggleTab(1)}
              className={`${
                toggleState === 1
                  ? "px-8 py-[3px] rounded-full bg-slate-100"
                  : "px-6 py-[2px] rounded-full bg-slate-50"
              }`}
            ></button>
          </li>
          <li>
            <button
              onClick={() => toggleTab(2)}
              className={`${
                toggleState === 2
                  ? "px-8 py-[3px] rounded-full bg-slate-100"
                  : "px-6 py-[2px] rounded-full bg-slate-50"
              }`}
            >
              {" "}
            </button>
          </li>
          <li>
            <button
              onClick={() => toggleTab(3)}
              className={`${
                toggleState === 3
                  ? "px-8 py-[3px] rounded-full bg-slate-100"
                  : "px-6 py-[2px] rounded-full bg-slate-50"
              }`}
            >
              {" "}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tab;
