import { useState } from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import v1 from '../assets/pepsi.mp4'
import v2 from '../assets/7up.mp4'

const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(null);

  const videodata = [
    {
      id: 0,
      name: "video1",
      url: v2,
    },
    {
      id: 1,
      name: "video2",
      url: v1,
    },
  ];
  return (
    <div>
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={1}
        className="mySwiper"
        pagination={{ clickable: true }}
        onSlideChange={() => {
          setIsPlaying(null);
        }}
        autoplay={true}
        watchSlidesProgress={true}
      >
        {videodata.map((data) => (
          <SwiperSlide key={data.id}>
            <ReactPlayer
              key={data.id}
              url={data.url}
              width  ='100%'

            
              controls={true}
              onPlay={() => {
                setIsPlaying(data.id);
              }}
              playing={isPlaying === data.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
