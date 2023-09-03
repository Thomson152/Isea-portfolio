import pepsi from "../assets/pepsi.png";
import apple from "../assets/apple.svg";
const Banner = () => {
  return (
    <div className="bg">
      <div className="flex md:flex-row mt-10 flex-col-reverse items-center">
        <div className="">
          <img
            src={pepsi}
            className="md:w-[649px] w-[400px] h-[376px] md:h-[534px]"
          />
        </div>
        <div className="">
          <img src={apple} className="md:w-[422px] md:h-[282px] w-[300px] h-[200px] " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
