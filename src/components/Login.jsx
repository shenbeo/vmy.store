import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/login");
    }
  }, []);

  async function logIn() {
    console.log("data", email.password);
    let item = { email, password };
    if (!email || !password) {
      return alert("Vui lòng nhập thông tin của bạn!!");
    }
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
    <div className=" container mx-auto md:py-16 py-20   flex flex-col md:items-center md:justify-center">
      <div className=" font-light md:shadow-2xl md:border-2 md:border-[#dbdada80] p-9 md:rounded-md">
        <div className="flex flex-col items-center justify-center">
          <div className=" text-3xl font-medium flex">
            <h1 className=" border-l-4 border-rose-500 pl-2">ĐĂNG NHẬP </h1>
          </div>
          
          <input
            className="w-full outline-none border-b-[1.5px] border-[#00000067] p-2  md:text-xl mt-6"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          ></input>
          <input
            className=" outline-none border-b-[1.5px] border-[#00000067] p-2 md:text-xl mt-3 w-full"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          ></input>

            
              <span className="w-full mt-3 text-sm text-[#5083d5] font-light underline cursor-pointer">Bạn quên mật khẩu?</span>
              



          <button
            // onClick={logIn}
            className="bg-[#000] w-full border-[1px] border-[#000] text-white hover:bg-[#000000af] mt-5  p-2"
            type="submit"
          >
            <Link to="/">ĐĂNG NHẬP</Link>
          </button>
          <Link
            to="/register"
            className="w-full  border-[#000] border-[1px] hover:bg-[#000] hover:text-white duration-500 transition-all mt-3 p-2"
          >
            <button className="w-full">ĐĂNG KÝ</button>
          </Link>

          <div className=" flex w-full items-center mt-6">
            <hr className="border-[1px] w-full" />
            <span className=" text-base mx-1 text-[#8a8a8a]">hoặc</span>
            <hr className="border-[1px] w-full" />
          </div>

          <div className="mt-4">
            <div className="flex">
              <i class="ri-google-fill bg-[#ccc] w-8 h-8 m-1 flex items-center justify-center rounded-full cursor-pointer text-[#525252]"></i>
              <i class="ri-facebook-fill bg-[#ccc] w-8 h-8 m-1 flex items-center justify-center rounded-full cursor-pointer text-[#525252]"></i>
              <i class="ri-linkedin-fill bg-[#ccc] w-8 h-8 m-1 flex items-center justify-center rounded-full cursor-pointer text-[#525252]"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
