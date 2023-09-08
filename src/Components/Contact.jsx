import Form from "./Form";
import Steps from "./Steps";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form2 from "./Form2";
import Form3 from "./Form3";

const Contact = () => {
  return (
    <div className=" py-20  lg:px-7 md:px-3  w-full flex justify-between md:flex-row flex-col ">
      <div className=" flex flex-col justify-center px-3 items-center">
        <p className="lg:text-5xl md:text-4xl text-2xl max-w-3xl  text-left  leading-tight font">
          Outsmart the competition with best-in-class digital marketing services
        </p>
        <h3 className="md:text-xl text-[17px] font mt-3 max-w-3xl">
          Get more traffic. Acquire more customers. Sell more stuff. SmartSites
          works for businesses of all sizes
        </h3>
      </div>

      <div className="mt-10">
        <div className="bg-[#070e29] md:w-[500px] lg:max-w-[450px] text-white md:py-14 py-16 md:px-6 px-4">
          <div>
            <Router>
              <Route path="/" component={Form} exact />
              <Route
                path="/form2"
                component={Form2}
                exact
              />
              <Route path="/form3" component={Form3} exact />
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
