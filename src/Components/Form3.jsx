import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { BsBriefcaseFill, BsCalendar3 } from "react-icons/bs";
import Steps from "./Steps";

const Form3 = () => {
  return (
    <div>
      <div className="mt-1 md:px-3 pt-2 ">
        <h1 className="md:text-4xl text-2xl text-left font">Success!</h1>

        <p className="md:text-lg text-base font mt-2">
          Thank you for considering SmartSites for your digital growth. We will
          contact you within one business day.
        </p>

        <h3 className="text-lg font mt-5">What you can do now:</h3>

        <div className="flex space-y-2 flex-col mt-3 ">
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-yellow-500 text-lg" />
            <a className="md:text-lg text-base hover:text-yellow-400 font" href="#">
              Call 201 870 6000
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <BsCalendar3 className="text-yellow-500 text-lg" />
            <a className="md:text-lg text-base hover:text-yellow-400 font" href="#">
              Schedule a meeting
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <BsBriefcaseFill className="text-yellow-500 text-lg" />
            <a className="text-lg hover:text-yellow-400 font" href="#">
              Browse our work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form3;
