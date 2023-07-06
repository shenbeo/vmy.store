import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import img_register from "../assets/register.png";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const [loadingPage, setLoadingPage] = useState(false);
  useEffect(() => {
    setLoadingPage(true);
    setTimeout(() => {
      setLoadingPage(false);
    }, 2000);
  }, []);

  async function signUp() {
    let item = { name, email, password };

    // if (!name || !email || !password) {
    //   return alert("Vui lòng nhập thông tin của bạn!!!");
    // }
    let result = await fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/login");
  }

  return (
    <div className=" start text-white">
      {loadingPage ? (
        <div className="flex  h-[100vh] items-center justify-center">
          <PropagateLoader
            color="#fff"
            // height={8}
            // width={400}
            size={15}
            loading={loadingPage}
          />
        </div>
      ) : (
        <div className=" md:h-[100vh]   flex flex-col md:items-center w-full h-full md:w-auto md:justify-center">
          <div className="bg-[#1f1f1faf] mt-10 pt-6 md:pt-0 h-full md:h-auto  flex items-center justify-center font-light md:shadow-2xl md:border-[1px] md:border-[#5c5c5c]  md:rounded-md">
            {/* trái */}
            <div className="flex flex-col items-center justify-center md:min-w-[360px] w-full  p-4 md:mx-4">
              <div className=" text-2xl font-medium mb-4  flex">
                <h1 className="">ĐĂNG KÝ</h1>
              </div>
              <div className="w-full">
                <span className="text-white flex items-center">
                  <i className="ri-user-fill mr-1 text-sm text-[#888888]"></i>
                  Tên
                </span>
                <input
                  className="outline-none mt-2 rounded-md border-[1px] border-[#5c5c5c] bg-transparent p-2 text-sm w-full"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Tên"
                ></input>
              </div>
              <div className="mt-4 w-full">
                <span className="text-white flex items-center">
                  <i className="ri-mail-fill mr-1 text-sm text-[#888888]"></i>
                  Email
                </span>
                <input
                  className=" outline-none rounded-md border-[1px] border-[#5c5c5c]  bg-transparent p-2 mt-2 text-sm w-full"
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                ></input>
              </div>
              <div className="mt-4 w-full">
                <span className="text-white flex items-center">
                  <i className="ri-lock-fill mr-1 text-sm text-[#888888]"></i>
                  Mật khẩu
                </span>
                <input
                  className="outline-none rounded-md border-[1px] border-[#5c5c5c]  bg-transparent p-2 mt-2 text-sm w-full"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Mật khẩu"
                ></input>
              </div>
              <div className="bg-[#000] w-full rounded border-[1px] border-[#000] text-white hover:bg-[#131212e7] duration-700 mt-10  p-2">
                <button
                  // onClick={signUp}
                  className="w-full"
                  type="submit"
                >
                  <Link to="/">ĐĂNG KÝ</Link>
                </button>
              </div>
              <Link
                to="/login"
                className="w-full  border-[#000] rounded border-[1px] hover:bg-[#000] hover:text-white duration-700 transition-all mt-3 p-2"
              >
                <button className="w-full ">ĐĂNG NHẬP</button>
              </Link>

              <div className=" flex w-full items-center mt-6">
                <hr className=" w-full" />
                <span className=" text-xs mx-1">hoặc</span>
                <hr className="w-full" />
              </div>

              <div className="mt-4">
                <div className="flex">
                  <i className="ri-google-fill bg-[#8a8a8a] w-8 h-8 m-1 flex items-center justify-center rounded-full cursor-pointer text-[#000]"></i>
                  <i className="ri-facebook-fill bg-[#8a8a8a] w-8 h-8 m-1 flex items-center justify-center rounded-full cursor-pointer text-[#000]"></i>
                  <i className="ri-linkedin-fill bg-[#8a8a8a] w-8 h-8 m-1 flex items-center justify-center rounded-full cursor-pointer text-[#000]"></i>
                </div>
              </div>
            </div>
            {/* phải */}
            <div className="responsive">
              <img
                className=" min-w-[25rem] h-[36rem] object-cover md:rounded-r-md"
                src={img_register}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
