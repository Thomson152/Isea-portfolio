import v1 from "../assets/pepsi.mp4";

const BgVideo = () => {
  return (
    <div className="relative w-full h-screen overflow-x-auto">
      <video
        src={v1}
        className="w-full h-[90vh] object-cover absolute top-0 left-0 z-0"
        autoPlay
        loop
        muted
      ></video>
      
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
        {/* Add your content on top of the video here */}
        {/* <h1 className="text-white text-4xl font-bold">
          Welcome to Our Website
        </h1> */}
      </div>
    </div>
  );
};

export default BgVideo;
