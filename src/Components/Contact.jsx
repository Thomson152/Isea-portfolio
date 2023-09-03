const Contact = () => {
  return (
    <div className=" py-20  lg:px-10 md:px-3  w-full flex justify-between md:flex-row flex-col ">
      <div className=" flex flex-col justify-center px-3 items-center">
        <p className="md:text-5xl text-2xl max-w-3xl  text-left  leading-tight font">
          Outsmart the competition with best-in-class digital marketing services
        </p>
        <h3 className="md:text-xl text-[17px] font mt-3 max-w-3xl">
          Get more traffic. Acquire more customers. Sell more stuff. SmartSites
          works for businesses of all sizes
        </h3>
      </div>

      <div className="mt-10">
        <div className="bg-[#070e29] md:w-[500px] lg:max-w-[450px] text-white py-10 px-6">
          <form >
            <h1 className="md:text-4xl text-2xl text-center font">Grow Your Brand</h1>
            <p className="text-lg text-center font mt-1">by partnering with SmartSites</p>

            <div className="mt-7 flex flex-col space-y-4">
              <input type="text" className="py-4 rounded px-2 font text-black required outline-none" placeholder="Full Name" />
              <input type="text" className="py-4 rounded px-2 font text-black required outline-none"  placeholder="Email Address" />
              <input type="text" className="py-4 rounded px-2 font text-black aria-required: outline-none"  placeholder="Phone Number" />
              <button className="ye md:py-4 py-3 md:text-2xl font text-xl hover:bg-orange-500 text-black font">Get Your Free Proposal</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
