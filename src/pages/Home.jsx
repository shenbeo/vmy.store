import React, { Suspense, useContext, useState } from "react";
import Product from "../components/Product";
import { AppContext } from "../contexts/AppContext";
import News from "../components/News";
import Loader from "../components/Loader";

const Sider = React.lazy(() => import("../components/Sider"));

export default function Home() {
  const { products, setProducts, handleSearch, filterResult, setLoading } =
    useContext(AppContext);

  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });

  // SORT PRICE
  const sortById1 = () => {
    setSorted({ sorted: "price", reversed: !sorted.reversed });
    const usersCopy = [...products];
    usersCopy.sort((userA, userB) => {
      // if (sorted.reversed){
      return userA.price - userB.price;
      // }
      // return userB.price - userA.price
    });
    setProducts(usersCopy);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  const sortById2 = () => {
    setSorted({ sorted: "price", reversed: !sorted.reversed });
    const usersCopy = [...products];
    usersCopy.sort((userA, userB) => {
      // if (sorted.reversed){
      //     return userA.price - userB.price
      // }
      return userB.price - userA.price;
    });
    setProducts(usersCopy);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };
  //END SORT PRICE

  //SORT TEXT
  const sortByName1 = () => {
    setSorted({ sorted: "title", reversed: !sorted.reversed });
    const usersCopy = [...products];
    usersCopy.sort((userA, userB) => {
      const fullNameA = `${userA.title}`;
      const fullNameB = `${userB.title}`;
      // if (sorted.reversed){
      //     return fullNameB.localeCompare(fullNameA);
      // }
      return fullNameA.localeCompare(fullNameB);
    });
    setProducts(usersCopy);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  const sortByName2 = () => {
    setSorted({ sorted: "title", reversed: !sorted.reversed });
    const usersCopy = [...products];
    usersCopy.sort((userA, userB) => {
      const fullNameA = `${userA.title}`;
      const fullNameB = `${userB.title}`;
      // if (sorted.reversed){
      return fullNameB.localeCompare(fullNameA);
      // }
      // return fullNameA.localeCompare(fullNameB);
    });
    setProducts(usersCopy);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  //END SORT TEXT

  return (
    <section>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Sider />
      </Suspense>

      <News />
      <div className="md:py-16 py-12 ">
        <div className="container mx-auto flex flex-col ">
          <div className="flex items-center justify-center">
            <h1 className=" md:text-4xl text-2xl uppercase border-b-[4px] border-rose-500 md:mb-10 mb-4 pb-2">
              sản phẩm
            </h1>
          </div>

          <div className="flex items-center justify-center  mb-7">
            <div className="flex items-center bg-[#ebebeb] z-20 w-80 py-2 px-2 rounded-md">
              <i className="ri-search-line px-1 pr-2 "></i>
              <input
                onChange={handleSearch}
                className=" bg-[#ebebeb] outline-none w-full"
                type="text"
                placeholder="Tìm kiếm..."
              />
            </div>
          </div>
          {/* sort */}
          <div>
            <h1 className=" pl-3 font-normal text-sm">Chọn theo tiêu chí</h1>
            <div className="flex justify-start items-start text-sm  mb-5 mt-3 flex-wrap">
              <button
                onClick={() => filterResult("áo nữ")}
                className="flex items-center justify-center rounded-md hover:bg-[#8c8c8c99] bg-[#cccccc70] p-2 duration-500 cursor-pointer md:w-20 m-2"
              >
                Áo nữ
              </button>
              <button
                onClick={() => filterResult("váy")}
                className="flex items-center justify-center rounded-md hover:bg-[#8c8c8c99] bg-[#cccccc70] p-2 duration-500 cursor-pointer ml-4 md:w-24 m-2"
              >
                váy
              </button>
              <button
                onClick={() => filterResult("áo nam")}
                className="flex items-center justify-center rounded-md hover:bg-[#8c8c8c99] bg-[#cccccc70] p-2 duration-500 cursor-pointer ml-4 md:w-24 m-2"
              >
                áo nam
              </button>
              <button
                onClick={() => filterResult("quần nam")}
                className="flex items-center justify-center rounded-md hover:bg-[#8c8c8c99] bg-[#cccccc70] p-2 duration-500 cursor-pointer ml-4 md:w-24 m-2"
              >
                quần nam
              </button>
              <button
                onClick={() => filterResult("túi")}
                className="flex items-center justify-center rounded-md hover:bg-[#8c8c8c99] bg-[#cccccc70] p-2 duration-500 cursor-pointer ml-4 md:w-24 m-2"
              >
                túi
              </button>
              <button
                onClick={() => filterResult("áo khoác")}
                className="flex items-center justify-center rounded-md hover:bg-[#8c8c8c99] bg-[#cccccc70] p-2 duration-500 cursor-pointer ml-4 md:w-24 m-2"
              >
                áo khoác
              </button>
            </div>
          </div>
          {/* end sort */}

          <div className=" left-0 my-2">
            <h1 className=" font-normal text-sm pl-3">Sắp xếp theo</h1>
            {/* sort */}
            <div className=" flex flex-wrap justify-start items-start text-sm  mb-5 mt-3">
              {/* Thấp đến cao */}
              <div className="flex items-center justify-center rounded-md hover:bg-[#8c8c8c99] bg-[#cccccc70] duration-500 cursor-pointer p-2 m-2">
                <i className="ri-sort-asc mr-1"></i>
                <button onClick={sortById1}>Giá thấp - cao</button>
              </div>
              {/* Thấp đến cao */}
              <div className="flex items-center justify-center rounded-md hover:bg-[#8c8c8c99] bg-[#cccccc70] duration-500 cursor-pointer p-2 m-2">
                <i className="ri-sort-desc mr-1"></i>
                <button onClick={sortById2}>Giá cao - thấp</button>
              </div>
              {/* A-Z */}
              <div className="flex items-center justify-center rounded-md hover:bg-[#8c8c8c99] bg-[#cccccc70] duration-500 cursor-pointer p-2 m-2">
                <i className="ri-filter-3-line mr-1"></i>
                <button onClick={sortByName1}>Sắp xếp từ A - Z</button>
              </div>
              {/* Z-A */}
              <div className="flex items-center justify-center rounded-md hover:bg-[#8c8c8c99] bg-[#cccccc70] duration-500 cursor-pointer p-2 m-2">
                <i className="ri-filter-3-line mr-1"></i>
                <button onClick={sortByName2}>Sắp xếp từ Z - A</button>
              </div>
            </div>
            {/* hết sort */}
          </div>

          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm  md:max-w-none ms:mx-0 mx-2  ">
              {products.map((pro, index) => {
                return (
                  <div key={index}>
                    <Product pro={pro} key={pro.id} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
