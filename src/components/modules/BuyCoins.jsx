import React, { useState } from "react";

//image
import Frame from "../../assets/images/Frame.png";
import Dollar from "../../assets/images/Dollar.png";
import Bit from "../../assets/images/bit.png";

const BuyCoins = () => {
  const [coin, setCoin] = useState("buy");
  return (
    <div>
      <div className=" flex m-auto flex-col justify-center items-center bg-[#1b1d27] mt-10 md:w-5/6 md:rounded-3xl md:p-6 lg:max-w-screen-2xl lg:py-14 lg:px-0 ">
        <div className="flex mt-3 justify-center items-center md:mb-8">
          <h2
            onClick={() => setCoin("buy")}
            className={
              coin === "buy"
                ? "text-green cursor-pointer border-b-1 border-green duration-300 text-lg mr-4 font-bold lg:text-3xl lg:border-b-2  lg:py-2"
                : "text-[#6B6B6B] text-lg font-bold cursor-pointer   border-b-1 border-[#1b1d27] mr-4 lg:text-3xl lg:border-b-2  lg:py-2"
            }
          >
            Buy
          </h2>
          <h2
            onClick={() => setCoin("sell")}
            className={
              coin === "sell"
                ? "text-green cursor-pointer border-b-1 border-green duration-300 text-lg ml-4 font-bold lg:text-3xl lg:py-2 lg:border-b-2 "
                : "text-[#6B6B6B] text-lg font-bold border-b-1 cursor-pointer  border-[#1b1d27] ml-4 lg:text-3xl lg:py-2 lg:border-b-2 "
            }
          >
            Sell
          </h2>
        </div>
        <div className=" flex flex-col items-center justify-center md:flex-row ">
          <div className=" md:mb-3 lg:mb-4 ">
            <div className=" text-left w-[176px] text-[9px] ml-1 mb-1 mt-4 md:mt-0 lg:text-sm">
              <label className=" text-white" htmlFor="#">
                I will spend
              </label>
            </div>
            <div className="flex items-center justify-center">
              <input
                placeholder="I will spend"
                className=" p-2 w-32 rounded-l-md text-[8px] bg-[#383a44] focus:border-none text-white placeholder:text-[#DCDCDC] lg:text-sm lg:p-3 lg:w-60 focus:outline-none"
              />
              <select className=" text-[9px]  w-full h-7 text-right rounded-r-md bg-[#383a44] text-white lg:text-sm lg:h-11 focus:outline-none ">
                <option className="  rounded-3xl" value="USD">
                  USD
                </option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>
          <div className=" md:mb-3 lg:ml-5">
            <img src={Frame} alt="Frame" className=" w-6 mt-4 lg:w-12" />
          </div>
          <div className=" md:mb-3 lg:mb-4 lg:ml-5">
            <div className=" text-left w-[176px] text-[9px] ml-1 lg:text-sm mb-1">
              <label className=" text-white" htmlFor="#">
                I will spend
              </label>
            </div>
            <div className="flex items-center justify-center">
              <input
                placeholder="I will Receive"
                className=" p-2 w-32 rounded-l-md text-[8px] bg-[#383a44] text-white placeholder:text-[#DCDCDC] lg:text-sm lg:p-3 lg:w-60 focus:outline-none"
              />
              <select className=" text-[9px]  w-full h-7 text-right rounded-r-md bg-[#383a44] text-white lg:text-sm lg:h-11 focus:outline-none ">
                <option className="" value="USD">
                  BTC
                </option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>
          <button className="py-2 px-3 my-4 md:ml-7 bg-buttongreen border-none rounded-lg text-dark text-xs font-bold lg:ml-10 lg:text-sm lg:ring-2  lg:ring-greenText  lg:px-6 lg:py-3 xl:px-12 xl:py-5">
            Buy Crypto
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyCoins;
