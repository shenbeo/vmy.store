import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader"

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
    
    if (!name || !email || !password) {
      return alert("Vui lòng nhập thông tin của bạn!!!");
    }
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
    <div>
                   { loadingPage ?  <div className="flex  h-[100vh] items-center justify-center">
      <PropagateLoader color="#001e2b" 
            // height={8}
            // width={400}
            size={15}
            loading={loadingPage}/>
    </div> :
      <div className="  md:h-[100vh] pt-24 pb-8 md:pt-0 md:pb-0 flex flex-col md:items-center md:justify-center ">
        <div className="font-light md:shadow-2xl md:border-[1px] md:border-[#001e2b]  md:rounded-md">
          <div className="flex flex-col items-center justify-center min-w-[300px] p-4">
            <div className=" text-xl font-medium flex">
              <h1 className=" border-l-4 border-red-600 pl-2">ĐĂNG KÝ </h1>
            </div>
            <div className="mt-6 w-full">
              <input
                className="outline-none border-b-[1.5px] border-[#001e2b] bg-transparent p-2 text-sm w-full"
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Tên"
              ></input>
            </div>
            <div className="mt-3 w-full">
              <input
                className=" outline-none border-b-[1.5px] border-[#001e2b] bg-transparent p-2 text-sm w-full"
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
              ></input>
            </div>
            <div className="mt-3 w-full">
              <input
                className="outline-none border-b-[1.5px] border-[#001e2b] bg-transparent p-2 text-sm w-full"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Mật khẩu"
              ></input>
            </div>
            <div
              className="bg-[#000] w-full rounded border-[1px] border-[#000] text-white hover:bg-[#000000af] duration-700 mt-10  p-2"
              to="/login"
            >
              <button 
              onClick={signUp} 
              className="w-full" type="submit">
                <Link to="/login">ĐĂNG KÝ</Link>
              </button>
  
             
  
  
            </div>
            <Link
              to="/login"
              className="w-full  border-[#000] rounded border-[1px] hover:bg-[#000] hover:text-white duration-700 transition-all mt-3 p-2"
            >
              <button className="w-full ">ĐĂNG NHẬP</button>
            </Link>
  
            <div className=" flex w-full items-center mt-6">
              <hr className="border-[1px] w-full" />
              <span className=" text-xs mx-1 font-medium text-[#001e2b]">hoặc</span>
              <hr className="border-[1px] w-full" />
            </div>
  
            <div className="mt-4">
              <div className="flex">
                <i className="ri-google-fill bg-[#ccc] w-8 h-8 m-1 flex items-center justify-center rounded-full cursor-pointer text-[#001e2b]"></i>
                <i className="ri-facebook-fill bg-[#ccc] w-8 h-8 m-1 flex items-center justify-center rounded-full cursor-pointer text-[#001e2b]"></i>
                <i className="ri-linkedin-fill bg-[#ccc] w-8 h-8 m-1 flex items-center justify-center rounded-full cursor-pointer text-[#001e2b]"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
}
    </div>
  );
}
