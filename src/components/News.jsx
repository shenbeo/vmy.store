import React from "react";
import news1 from "../assets/banner1.webp";
import news2 from "../assets/banner2.webp";
export default function News() {
  return (
    <div className="md:py-14 pt-10">
      <div className="flex items-center justify-center ">
        <h2 className="md:text-2xl text-xl uppercase font-medium md:mb-10 mb-4 pb-2">
          ưu đãi hôm nay
        </h2>
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
