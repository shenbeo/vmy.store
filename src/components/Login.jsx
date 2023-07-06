import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import img_login from "../assets/login.jpg";
export default function Login() {
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

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/login");
    }
  }, []);

  async function logIn() {
    console.log("data", email.password);
    let item = { email, password };
    // if (!email || !password) {
    //   return alert("Vui lòng nhập thông tin của bạn!!");
    // }
    let result = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/");
  }

  return (
    <div className="start text-white">
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
            <div className="  flex flex-col items-center justify-center md:min-w-[360px] w-full  p-4 md:mx-4">
              <div className=" text-2xl font-medium mb-4  flex">
                <h1 className="">ĐĂNG NHẬP</h1>
              </div>

              <div className=" w-full">
                <span className="text-white flex items-center">
                  <i className="ri-mail-fill mr-1 text-sm text-[#888888]"></i>
                  Email
                </span>
                <input
                  className="outline-none mt-2 rounded-md border-[1px] border-[#5c5c5c] bg-transparent p-2 text-sm w-full"
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                ></input>
              </div>
              <div className="mt-4 w-full">
                <span className=" flex items-center">
                  <i className="ri-lock-fill mr-1 text-sm text-[#888888]"></i>
                  Mật khẩu
                </span>
                <input
                  className=" outline-none rounded-md border-[1px] border-[#5c5c5c]  bg-transparent p-2 mt-2 text-sm w-full"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Mật khẩu"
                ></input>
              </div>

              <span className="w-full mt-4 text-sm   hover:underline cursor-pointer">
                Bạn quên mật khẩu?
              </span>

              <button
                // onClick={logIn}
                className="bg-[#000] w-full rounded border-[1px] border-[#000] text-white hover:bg-[#131212e7] duration-700 mt-10  p-2"
                type="submit"
              >
                <Link to="/">ĐĂNG NHẬP</Link>
              </button>
              <Link
                to="/register"
                className="w-full  border-[#000] rounded border-[1px] hover:bg-[#000] hover:text-white duration-700 transition-all mt-3 p-2"
              >
                <button className="w-full">ĐĂNG KÝ</button>
              </Link>

              <div className=" flex w-full items-center mt-6">
                <hr className="w-full" />
                <span className=" text-xs mx-1 ">Hoặc</span>
                <hr className=" w-full" />
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
                className=" min-w-[23rem] h-[32rem] object-cover md:rounded-r-md"
                src={img_login}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
