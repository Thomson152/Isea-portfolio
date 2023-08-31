import v1 from "../assets/pepsi.mp4";

const BgVideo = () => {
  return (
    <div className="relative w-full h-[600px] overflow-x-auto">
      <video
        src={v1}
        className="w-full h-[600px] object-cover absolute top-0 left-0 z-0"
        autoPlay
        loop
        muted
      ></video>
      
   
    </div>
  );
};

export default BgVideo;
