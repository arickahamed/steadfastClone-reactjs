import React, { useState } from "react";
import { filterData } from "../Assets/filterData";

const Filter = () => {
  const [data, setData] = useState(filterData);
  const [activeBtn, setActiveBtn] = useState("all");

  const handleFilter = (categoryName) => {
    setActiveBtn(categoryName);
    if (categoryName === "all") {
      setData(filterData);
    } else {
      setData(filterData.filter((info) => info.category === categoryName));
    }
  };

  return (
    <main className="w-full my-3 py-4">
      <div>
        <p className="text-center pb-3">Take a look</p>
        <div className="flex justify-between md:justify-around w-[80%] md:w-[65%] lg:w-[40%] pt-2 pb-4 mx-auto">
          <button
            onClick={() => handleFilter("all")}
            className={`${
              activeBtn === "all"
                ? "text-customWhite bg-customCyan shadow-md "
                : "text-customBlack border border-customCyan"
            }   py-1 px-3 rounded-md`}
          >
            all
          </button>
          <button
            onClick={() => handleFilter("laptop")}
            className={`${
              activeBtn === "laptop"
                ? "text-customWhite bg-customCyan shadow-md"
                : "text-customBlack border border-customCyan"
            }   py-1 px-3 rounded-md`}
          >
            laptop
          </button>
          <button
            onClick={() => handleFilter("tab")}
            className={`${
              activeBtn === "tab"
                ? "text-customWhite bg-customCyan shadow-md"
                : "text-customBlack border border-customCyan"
            }   py-1 px-3 rounded-md`}
          >
            tab
          </button>
          <button
            onClick={() => handleFilter("phone")}
            className={`${
              activeBtn === "phone"
                ? "text-customWhite bg-customCyan shadow-md"
                : "text-customBlack border border-customCyan"
            }   py-1 px-3 rounded-md `}
          >
            phone
          </button>
        </div>
        <div className="w-[90%] md:w-[80%] lg:w-[70] pb-4 mx-auto">
          <div className="mt-5 p-3 flex flex-col md:flex-row md:flex-wrap md:justify-center lg:justify-evenly">
            {data.map((info) => {
              return (
                <div
                  key={info.title}
                  className="flex flex-col p-3 rounded-md w-[90%] mx-auto mt-5 md:w-[40%] lg:w-[22%] shadow-md"
                >
                  <img src={info.image} alt={info.title} />
                  <h3 className="text-[20px] font-bold pb-2 text-center">
                    {info.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Filter;
