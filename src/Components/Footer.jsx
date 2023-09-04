const Footer = () => {
  return (
    <div className="py-20 mt-16 bg-[#070e29]">
      <div className="flex justify-center flex-col px-3 md:px-0 items-center">
        <h2 className="md:text-4xl text-2xl text-white font">Let’s make things happen</h2>

        <p className="md:text-lg font mt-2 tezt-[16px] text-center text-slate-200">
          Partner with the #1 ranked digital marketing agency - before your
          competitor does.
        </p>
        <button className="md:py-5 py-3 ye mt-7 shadow px-[40px] md:px-52 lg:px-72  md:text-2xl text-xl font">
          Get Your Free Proposal
        </button>
        <p className="mt-5 md:text-2xl font text-[16px] font-sans text-white">
          or call{" "}
          <span className="text-yellow-400">
            <a href="tel:091-680-342-28">091-680-342-28</a>{" "}
          </span>{" "}
          to get started today
        </p>
      </div>
    </div>
  );
};

export default Footer;
