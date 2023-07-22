import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen, isOpenUser, setIsOpenUser, itemAmount } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  // SCOLL HEADER
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  //LOGOUT
  let navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user-info"));
  console.log(user);
  function logOut() {
    localStorage.clear();
    navigate("/");
  }

  // OPEN MENU USER
  const menuRef = useRef();
  const imgRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });


  return (
    <header
      className={`${
        isActive ? " py-2 bg-[#001e2bf1]  shadow-lg  " : " py-2 bg-[#001e2b]"
      } fixed w-full z-30 transition-all duration-700`}
    >
      <div className="container mx-auto flex items-center justify-between h-full w-full">
        {/* logo */}
        <Link to="/" className="ml-4 md:ml-0">
          <div className="flex  font_logo text-sm bg-[#00684a] px-2 py-2 scroll-py-14 text-white">
            <h1 className="">V</h1>
            <h1 className="ml-1">M</h1>
            <h1 className="ml-1">Y.</h1>
          </div>
        </Link>
        {/* text-icon */}
        <div className="flex items-center justify-center">
          {/* cart */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-[#ecececeb] bg-[#b4b3b3ba] relative w-8 h-8 flex items-center justify-center rounded-full duration-500 transition-all cursor-pointer mx-4"
          >
            <i className="ri-shopping-bag-line font-extralight"></i>
            <div className="flex absolute items-center justify-center text-[#e9e4e4] rounded-full text-xs ml-6 mb-5 pt-1 bg-red-600 w-4 h-4">
              <span className="mb-[2px] font-medium">{itemAmount}</span>
            </div>
          </div>

          <Link className="">
            {/* icon user */}
            <div
              onClick={() => setOpen(!open)}
              ref={imgRef}
              className="hover:bg-[#ecececeb] bg-[#b4b3b3ba] ri-user-line font-extralight mr-4 md:mr-0  w-8 h-8 flex items-center justify-center rounded-full duration-500 transition-all cursor-pointer"
            ></div>
            {/* list menu */}
            <div>
              <div>
                {open && (
                  <div
                    ref={menuRef}
                    className=" absolute w-[2rem] mt-2 flex items-center justify-center"
                  >
                    <div className="bg-[#adadad] flex flex-col">
                      <Link
                        className="pr-6 px-2 py-1 hover:bg-[#7b7b7b] transition-all duration-500 hover:text-white border-b-[1px] border-[#ccc]"
                        to="/login"
                      >
                        Login
                      </Link>
                      <Link
                        className="pr-6 px-2 py-1 hover:bg-[#7b7b7b] transition-all duration-500 hover:text-white"
                        to="/register"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
