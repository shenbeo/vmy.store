import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Cart from "./Cart";

export default function Sidebar() {
  const { isOpen, handleClose, cart, clearCart, total } =
    useContext(AppContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } py-4 bg-white fixed top-0   shadow-2xl w-full md:max-w-[30vw] transition-all duration-300 z-40 px-4 `}
    >
      <div className="flex items-center justify-between py-3 border-b-[1px] border-[#ccc]">
        <h1 className="flex items-center font-bold border-l-4 text-base border-red-600 text-red-600 pl-1">
          CART
          <img
            className=" w-9 ml-2"
            src="https://www.pngkit.com/png/full/116-1169537_cart-png-clipart-icon-gi-hng-png.png"
            alt=""
          />
        </h1>
        <button
          className="hover:bg-[#cccccc4f] relative w-6 h-6 flex items-center justify-center rounded-full duration-700 transition-all cursor-pointer"
          onClick={handleClose}
        >
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>

      <div className="flex-col flex w-full overflow-y-auto max-h-[50vh]">
        {cart.map((item, index) => {
          return (
            <div key={index}>
              <Cart item={item} key={item.id} />
            </div>
          );
        })}
      </div>

      <div>
        <div className="flex justify-between  items-center mt-6">
          <div className="flex font-semibold">
            Tổng cộng:
            <span className="ml-5 flex font-semibold text-red-600">
              {parseFloat(total).toFixed(2)}
              <h1 className="ml-1 underline">đ</h1>
            </span>
          </div>

          <button
            onClick={clearCart}
            className=" bg-red-500 w-10 flex items-center justify-center hover:bg-red-400 duration-700 h-10 rounded-sm text-white"
          >
            <i className="ri-delete-bin-line text-md"></i>
          </button>
        </div>

        <div className=" my-6 bg-[#001e2b] w-full text-md font-medium   cursor-pointer hover:bg-[#001e2bdd] duration-700  text-white flex items-center justify-center py-3 ">
          <a href="/"><button>MUA</button></a>
        </div>
      </div>
    </div>
  );
}
