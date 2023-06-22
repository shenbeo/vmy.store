import React from "react";
import bct from "../assets/icon/bocongthuong.png";

import pay from "../assets/icon/pay.png";

export default function Footer ()  {
  return (
    <div className="  bg-[#001e2b] text-xs md:py-10 py-8">
      <div className="md:flex px-4 items-start justify-between container md:mx-auto">

        {/* N1 */}
        <div className="  flex-1 md:mb-0 mb-4 ">
          <div className="flex items-center font_logo justify-center font-bold text-sm  bg-[#00684a] w-20 py-2 mb-3   text-[#ffffff]">
            <h1 className="">V</h1>
            <h1 className="ml-1">M</h1>
            <h1 className="ml-1">Y.</h1>
          </div>
          <div>
            <ul className="text-[#e9e4e486] font-light">
              <li className="mb-2">
                Địa chỉ 1: <span>Nguyễn Du, Quận 1, TP.HCM</span>
              </li>
              <li className="mb-2">
                Địa chỉ 2: <span>Võ Oanh, Bình Thạnh, TP.HCM</span>
              </li>
              <li className="mb-2">
                Email: 
                <span className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer ">
                   contact@vmystore.com
                </span>
              </li>
              <li className="mb-2">
                Fax:
                <span className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer ">
                +8424 - 0000.0000
                </span>
              </li>
              <li className="mb-1">
                Số điện thoại:
                <span className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer ">
                  (+84)64.999.999
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* N2 */}
        <div className="  flex-1 md:mb-0 mb-4">
          <h1 className=" text-lg font-medium mb-2 text-[#e9e4e4]">Sản phẩm</h1>
          <div>
            <ul className="text-[#e9e4e486] font-light">
              <li className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer mb-1">
                Áo nữ
              </li>
              <li className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer mb-1">
                Áo nam
              </li>
              <li className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer mb-1">
                Quần nữ
              </li>
              <li className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer mb-1">
                Quần nam
              </li>
              <li className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer mb-1">
                Áo khoác
              </li>
              <li className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer mb-1">
                Túi
              </li>
            </ul>
          </div>
        </div>


        {/* N3 */}
        <div className="  flex-1 md:mb-0 mb-4">
          <h1 className=" text-lg font-medium mb-2 text-[#e9e4e4]">
            Giới thiệu
          </h1>
          <div>
            <ul className="text-[#e9e4e486] font-light  ">
              <li className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer mb-1">
                Giới thiệu
              </li>
              <li className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer mb-1">
                Tin Tức
              </li>
              <li className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer mb-1">
                Tuyển dụng
              </li>
              <li className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer mb-1">
                Với cộng đồng
              </li>
              <li className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer mb-1">
                Hệ thống cửa hàng
              </li>
              <li className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer mb-1">
               Liên hệ
              </li>
            </ul>
          </div>
        </div>

        {/* N4 */}
        <div className="  flex-1 md:mb-0 mb-4">
          <h1 className=" text-lg font-medium mb-2 text-[#e9e4e4]">Liên hệ</h1>
          <div>
            <ul className="text-[#e9e4e486] font-light">
              <li className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer mb-1">
                Điều khoản dịch vụ
              </li>
              <li className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer mb-1">
                Chương trình dành cho KH mới
              </li>
              <li className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer mb-1">
                Chính sách bảo mật thông tin KH
              </li>
              <li className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer mb-1">
                Chính sách thanh toán
              </li>
              <li className=" hover:text-[#5d78f1cc] duration-500 transition-all cursor-pointer mb-1">
                Bảo hành và hoàn trả
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex text-[#e9e4e4]">
              <li className=" text-xl pr-2 pt-2 pb-2 cursor-pointer hover:text-[#e9e4e486] transition-all duration-300">
                <i className="ri-facebook-box-fill"></i>
              </li>
              <li className=" text-xl p-2 cursor-pointer hover:text-[#e9e4e486] transition-all duration-300">
                <i className="ri-instagram-fill"></i>
              </li>
              <li className=" text-xl p-2 cursor-pointer hover:text-[#e9e4e486] transition-all duration-300">
                <i className="ri-twitter-fill"></i>
              </li>
              <li className=" text-xl p-2 cursor-pointer hover:text-[#e9e4e486] transition-all duration-300">
                <i className="ri-youtube-fill"></i>
              </li>
            </ul>
          </div>
        </div>
        {/* N5 */}
        <div className="  flex-1 md:mb-0 mb-4">
        <h1 className=" text-lg font-medium mb-2 text-[#e9e4e4]">Phương thức thanh toán</h1>
        <div>
            <img src={pay} alt="" />
        </div>
        <div className="mt-2">
            <img src={bct} alt="" />
        </div>

        </div>
      </div>


        
        {/*  */}
      <div className="border-t border-gray-600  mt-6 font-extralight">
        <div className="md:flex items-center justify-between container mx-auto mt-6 md:px-0 px-4 ">
          <div className=" flex-1 text-sm text-[#e9e4e4] md:mb-0 mb-4 ">
            <h1>© 2023 NguyenThanhVinh </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

 
