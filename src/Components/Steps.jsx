import React from "react";

const Steps = ({ step1, step2, step3 }) => {
  return (
    <div className="flex justify-center items-center">
    <button className="flex border rounded-full border-[#32384e]  justify-center mt-3 items-center  ">
      {step1 ? (
        <button className="py-1 bg-orange-500   px-12"></button>
      ) : (
        <button className="py-1 bg-slate-950  px-12"></button>
      )}
       {step2 ? (
        <button className="py-1 bg-orange-500  px-12"></button>
      ) : (
        <button className="py-1 bg-slate-950 px-12"></button>
      )}
       {step3 ? (
        <button className="py-1 bg-orange-500  px-12"></button>
      ) : (
        <button className="py-1 bg-slate-950  px-12"></button>
      )}
    </button>

    </div>

  );
};

export default Steps;
