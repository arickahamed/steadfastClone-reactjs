import React from "react";
import Layout from "../components/Layout";
import { cardData } from "../Assets/cardData";
import riderImage from "../images/steadfast_rider.png";
import Filter from "../components/Filter";

const Home = () => {
  const bgImg = {
    backgroundImage: `url(${riderImage})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }
  return (
    <Layout>
      <div className=" md:w-[90%] ld:w-[80%] mt-3 mx-auto">
        <div style={bgImg}  className=" w-[90%] md:w-[80%] lg:w-[75%] text-center m-auto">
          <h3 className="text-[25px] font-bold">
            We Deliver <br /> Parcel on Time with <br /> no Hassle
          </h3>
          <p className="py-3">
            Easy Tracking, fast Payment, and safe Delivery across country.
          </p>
          <button className="mb-4 bg-customCyan text-customWhite py-2 px-3 rounded-lg">
            Become a Merchant
          </button>
        </div>
        <div className="mt-5 p-3 flex flex-col md:flex-row md:flex-wrap md:justify-center lg:justify-evenly">
          {cardData.map((info) => {
            return (
              <div
                key={info.title}
                className="flex flex-col p-3 rounded-md border border-green-400 w-[90%] mx-auto mt-5 md:w-[40%] lg:w-[22%] lg:mt-0 shadow-md"
              >
                <img src={info.image} alt={info.title} />
                <h3 className="text-[20px] font-bold pb-2 text-center">
                  {info.title}
                </h3>
                <p>{info.description}</p>
              </div>
            );
          })}
        </div>
        <Filter />
      </div>
    </Layout>
  );
};

export default Home;
