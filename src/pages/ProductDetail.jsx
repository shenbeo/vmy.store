import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import PropagateLoader from "react-spinners/PropagateLoader"

export default function ProductDetail() {
  const { products, addToCart, success , isOpen, setIsOpen } = useContext(AppContext);

  const [loadingPage, setLoadingPage] = useState(false);
  useEffect(() => {
    setLoadingPage(true);
    setTimeout(() => {
      setLoadingPage(false);
    }, 2000);
  }, []);



  const { id } = useParams();
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if (!product) {
  //   return <section>Loading...</section>
  // }

  const { img, category, title, price, size } = product;

  // BACK
  let navigate = useNavigate();
  function handleBackData() {
    navigate("/");
  }
  // END BACK

  return (
    <section>
                   { loadingPage ?  <div className="flex  h-[100vh] items-center justify-center">
      <PropagateLoader color="#001e2b" 
            // height={8}
            // width={800}
            size={15}
            loading={loadingPage}/>
    </div> :
      <div className="pt-16 md:pb-24 ">
        <hr className=" md:mb-12 mb-6" />
        <div className="container mx-auto ">
          <div className=" text-sm font-sans flex items-center j mb-6 text-gray-400">
            <i className="ri-home-4-fill mx-1 text-xl"></i>
            <h1
              onClick={handleBackData}
              className=" hover:underline cursor-pointer hover:text-blue-500"
            >
              Trang chủ
            </h1>
            <i className="ri-arrow-right-s-line mx-1 text-xl"></i>
            <h1
              onClick={handleBackData}
              className=" hover:underline cursor-pointer hover:text-blue-500"
            >
              {category}
            </h1>
            <i className="ri-arrow-right-s-line mx-1 text-xl"></i>
            <h1 className=" hover:underline cursor-pointer hover:text-blue-500">
              {title}
            </h1>
          </div>

          <div className="md:flex justify-around">
            {/* IMAGE */}
            <div className="md:mx-0 mx-4">
              <img
                className=" max-h-[630px] w-full object-cover"
                src={img}
                alt=""
              />
            </div>

            {/* TITLE */}
            <div className=" md:w-[50vw]  md:pl-10 mx-4 md:mx-0">
              <div className=" border-b-[1px] md:pb-7 pb-4 md:mt-0 mt-3">
                <h1 className=" uppercase mb-3 text-xl font-medium">{title}</h1>
                <p className=" text-sm text-gray-500 mb-3 font-light">
                  MÃ SP: 8TP23S04003
                </p>
                <div className="flex text-red-500 font-medium text-xl">
                  {price} <h1 className="ml-1 underline">đ</h1>
                </div>
              </div>

              <div className="md:py-4 py-2 border-b-[1px] md:pb-7">
                <div className="mb-3">
                  <p className="text-sm text-gray-500 mb-3 font-light">
                    Kích cỡ:
                  </p>{" "}
                  <h1 className="my-2 bg-[#ebebeb] flex items-center justify-center w-8 h-8 text-sm  border-gray-500 font-light ">
                    {size}
                  </h1>
                </div>
                <p className=" text-sm text-gray-500  font-light">
                  Phân loại: {category}
                </p>
              </div>

              <div className="md:py-4 py-2">
                <div className="flex pb-1">
                  <i className="ri-check-line"></i>
                  <div className="flex ml-4 text-sm">
                    Miễn phí giao hàng cho đơn hàng từ{" "}
                    <h1 className="ml-1 font-medium underline">499.000đ</h1>
                  </div>
                </div>
                <div className="flex w-full">
                  <i className="ri-check-line "></i>
                  <div className="flex ml-4 text-sm">
                    Đổi trả miễn phí torng vòng 30 ngày kể từ ngày mua.
                  </div>
                </div>
              </div>

              {/* BUTTON */}
            

              <div className="flex flex-col items-start justify-start py-4 border-b-[1px] pb-7">
                <button onClick={() => setIsOpen(!isOpen)} className="bg-[#001e2b] hover:bg-[#001e2bdd] duration-700  w-full my-2 md:w-80 p-2 cursor-pointer text-white font-light text-lg">
                  MUA NGAY
                </button>
                <button
                  onClick={() => addToCart(product, product.id)}
                  className="border-[#001e2b] hover:bg-[#001e2b] duration-700 hover:text-white font-light border-[1px] w-full  my-2 md:w-80 p-2 cursor-pointer text-lg"
                >
                  <h1 onClick={success}>THÊM VÀO GIỎ HÀNG</h1>
                </button>
              </div>

              {/* CONTEN */}
              <div className="py-4 text-sm">
                <h1 className="mb-1f font-semibold">MÔ TẢ:</h1>
                <p className="text-gray-600  w-full font-light text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, et quam numquam temporibus, quae, eveniet nesciunt
                  nihil animi cumque minus molestias laborum perferendis
                  tempora. Voluptates delectus eos commodi officiis accusantium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
}
    </section>
  );
}
