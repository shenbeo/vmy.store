import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import Sekeleton from "./Sekeleton";

export default function Product({ pro }) {
  const { id, img, category, title, price, size } = pro;
  const { addToCart, success, loading } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Sekeleton />
      ) : (
        <div>
          <div className="relative overflow-hidden group transition">
            <div className=" w-full h-full  flex justify-center items-center">
              {/* IMAGE */}
              <div className=" mx-auto  flex items-center justify-center">
                <Link to={`/product/${id}`}>
                  <img
                    className="group-hover:scale-110  object-cover duration-300 transition"
                    src={img}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            {/*  AND AND DETAIL*/}
            <div className="top-0 -right-11 group-hover:right-5  absolute  flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 p-2 transition-all duration-300">
              <button onClick={() => addToCart(pro, id)}>
                <div
                  onClick={success}
                  className="flex items-center rounded hover:bg-red-400 duration-700 bg-red-600 justify-center text-white w-12 h-12"
                >
                  <h1 className="text-3xl ri-add-line"></h1>
                </div>
              </button>

              <Link
                to={`/product/${id}`}
                className="w-12 h-12 bg-white hover:bg-[#f2f2f2] duration-700 rounded flex justify-center items-center text-primary drop-shadow-xl"
              >
                <i className="ri-eye-line"></i>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="mt-3 px-2 pb-2">
            <div className="text-xs flex items-end justify-between capitalize text-gray-500 my-1">
              <span>{category}</span>
              <span>Size: {size}</span>
            </div>
            <a>
              <h2 className="font-medium mt-2 mb-2">{title}</h2>
            </a>
            <div className=" font-semibold text-red-500">
              {price}
              <span className="ml-1 underline">đ</span>
            </div>
          </div>
          {/*  */}
        </div>
      )}
    </div>
  );
}
