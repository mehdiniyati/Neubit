import React from "react";

///images
import icon1 from "../../assets/images/Icon1.png";
import icon2 from "../../assets/images/Icon2.png";
import icon3 from "../../assets/images/Icon3.png";
import icon4 from "../../assets/images/Icon4.png";

const LearnCrypto = () => {
  return (
    <div>
      <div className=" mt-10 lg:mt-32 bg-dark2 py-4">
        <div className="flex flex-col justify-center items-center">
          <button className="bg-bgButton mt-8 text-greenText px-5 py-2 text-xs rounded-full">
            Learn crypto
          </button>
          <p className="text-white lg:text-4xl mt-2">
            Let’s learn how crypto works?
          </p>
          <p className=" text-gray text-[9px] px-6 mt-2 text-center">
            Ever wondered what powers the magic of cryptocurrencies? Dive into
            the heart of blockchain technology
          </p>
        </div>
        <div className=" flex justify-center items-center">
          <div className="grid grid-rows-2 grid-cols-2 gap-4 mt-4 text-xs md:grid-cols-4 md:grid-rows-none lg:gap-8 ">
            <div className="flex flex-col items-center p-3 ring-2 duration-400 cursor-pointer ring-dark2 hover:ring-2 hover:ring-green rounded-xl lg:p-5">
              <img src={icon1} alt="Icon1" className="w-9 lg:w-12" />
              <p className="text-white mt-2">Learn crypto</p>
            </div>
            <div className="flex flex-col items-center p-3 ring-2 duration-400 cursor-pointer ring-dark2 hover:ring-2 hover:ring-green rounded-xl lg:p-5">
              <img src={icon2} alt="Icon2" className="w-9 lg:w-12" />
              <p className="text-white mt-2">Let’s Earn</p>
            </div>
            <div className="flex flex-col items-center p-3 ring-2 duration-400 cursor-pointer ring-dark2 hover:ring-2 hover:ring-green rounded-xl lg:p-5">
              <img src={icon3} alt="Icon3" className=" w-9 lg:w-12" />
              <p className="text-white mt-2">How to trade</p>
            </div>
            <div className="flex flex-col items-center p-3 ring-2 duration-400 cursor-pointer ring-dark2 hover:ring-2 hover:ring-green rounded-xl lg:p-5">
              <img src={icon4} alt="Icon4" className="w-9 lg:w-12" />
              <p className="text-white mt-2">Build portfolio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnCrypto;
