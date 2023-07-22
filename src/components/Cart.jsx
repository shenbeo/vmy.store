import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Sekeleton from "./Sekeleton";


export default function Cart({ item }) {

  // 
  const { removeFromCart, decreaseAmount, increaseAmount, loading } = useContext(AppContext);

  // 
  const { id, title, img, price, amount, category, size } = item;


  return (
    <div>
      {loading ? (
        <Sekeleton />
      ) : (
        <div className="flex py-3 my-3 border-b-[1px] text-sm border-[#cccccc7e]">
          <div className="flex w-full">
            <img className="max-w-[80px]" src={img} alt="" />

            <div className="flex flex-col w-full mx-4">
        {/* title */}
              <div className="flex justify-between">
                <div className=" uppercase font-medium hover:underline">
                  {title}
                </div>
                <div
                  onClick={() => removeFromCart(id)}
                  className=" hover:bg-[#cccccc7e] w-5 h-5 flex items-center justify-center rounded-full duration-700"
                >
                  <i className="ri-close-fill cursor-pointer"></i>
                </div>
              </div>

        {/* category */}
              <div className=" text-[#969595] mb-1 flex">
                <h1>{category}</h1>,<p className="ml-1">size: {size}</p>
              </div>

        {/* price */}
              <div className="flex items-center justify-between mb-2">
                <span className="flex font-medium">
                  {price} <h1 className="ml-1 underline">đ</h1>
                </span>
                <div>
                  <div className="flex items-center justify-center">
                    <i
                      onClick={() => increaseAmount(id)}
                      className="ri-add-line cursor-pointer flex items-center justify-center w-6 h-6 bg-[#cccccc7e]  hover:bg-[#ccccccbb] transition-all duration-300 rounded-full p-1"
                    ></i>
                    <span className="px-4 w-3 flex items-center  justify-center ">
                      {amount}
                    </span>
                    <i
                      onClick={() => decreaseAmount(id)}
                      className="ri-subtract-line cursor-pointer flex items-center justify-center w-6 h-6 bg-[#cccccc7e]  hover:bg-[#ccccccbb] transition-all duration-300 rounded-full p-1"
                    ></i>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h1 className="bg-[#cccccc7e] p-1">Tạm tính: </h1>
                <div className="flex font-medium">
                  <span>{` ${parseFloat(price * amount).toFixed(3)}`}</span>
                  <h1 className="ml-1 underline">đ</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
