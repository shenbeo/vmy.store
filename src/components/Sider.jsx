import React from "react";
import { dataSider } from "../Fake_api/DataApi";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Sider() {
  return (
    <div className="flex items-center justify-start pt-16 md:pt-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3800,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div>
          <div className="flex items-center justify-center ">
            <div>
              {dataSider.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className=" flex items-center justify-center md:mt-16 ">
                      <img
                        className=" object-cover bg-cover max-h-[40rem] w-[100vw]  duration-500 ease-in-out"
                        src={slide.img}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}
