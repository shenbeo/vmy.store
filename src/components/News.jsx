import React from "react";
import news1 from "../assets/banner1.webp";
import news2 from "../assets/banner2.webp";
export default function News() {
  return (
    <div className="md:py-16 pt-12">
      <div className="flex items-center justify-center ">
        <h1 className=" md:text-4xl text-2xl uppercase border-b-[4px] border-rose-500 md:mb-10 mb-4 pb-2">
          ưu đãi hôm nay
        </h1>
      </div>

      <div className="md:flex item-center justify-center">
        <div className=" cursor-pointer">
          <img src={news1} alt="" />
        </div>
        <div className=" cursor-pointer">
          <img src={news2} alt="" />
        </div>
      </div>
    </div>
  );
}
