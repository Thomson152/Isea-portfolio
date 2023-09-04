import React from "react";

const Steps = ({ step1, step2, step3 }) => {
  return (
    <div className="flex justify-center mt-3 items-center  ">
      {step1 ? (
        <button className="py-1 bg-orange-500 rounded-full px-10"></button>
      ) : (
        <button className="py-1 bg-slate-950 rounded-full px-10"></button>
      )}
       {step2 ? (
        <button className="py-1 bg-orange-500 rounded-full px-10"></button>
      ) : (
        <button className="py-1 bg-slate-950 rounded-full px-10"></button>
      )}
       {step3 ? (
        <button className="py-1 bg-orange-500 rounded-full px-10"></button>
      ) : (
        <button className="py-1 bg-slate-950 rounded-full px-10"></button>
      )}
    </div>
  );
};

export default Steps;
