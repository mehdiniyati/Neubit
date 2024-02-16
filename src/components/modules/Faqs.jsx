import React from "react";

const Faqs = () => {
  return (
    <div>
      <div className="mb-5 max-w-screen-2xl m-auto xl:my-20 ">
        <div className="text-center">
          <span className=" text-xs text-green bg-bgButton px-4 py-2 rounded-full">
            FAQs
          </span>
          <h1 className=" text-white mt-3 text-lg lg:text-2xl lg:mt-6 xl:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="text-gray text-[10px] opacity-90 lg:text-sm lg:mt-3 xl:text-base">
            Here you will find answers to the most common questions about
            <br /> crypto currency and crypto trading.
          </p>
        </div>
        <div className="text-white grid grid-cols-2 text-center lg:text-left mx-4 mt-3 gap-2 xl:gap-10">
          <div className=" border-b-1 border-[#2b2b2b] pb-2 md:p-6 ">
            <h2 className="text-sm lg:text-base xl:text-lg xl:font-bold">
              What is cryptocurrency?
            </h2>
            <p className="text-gray text-[10px] mt-1 opacity-65 lg:text-xs lg:mt-3 xl:text-base">
              Cryptocurrency is a digital or virtual form of money that uses
              cryptography for secure transactions.
            </p>
          </div>
          <div className=" border-b-1 border-[#2b2b2b] pb-2 md:p-6 md:pb-0 ">
            <h2 className="text-sm lg:text-base xl:text-lg xl:font-bold">
              How can I buy cryptocurrencies?
            </h2>
            <p className="text-gray text-[10px] mt-1 opacity-65 lg:text-xs lg:mt-3 xl:text-base">
              Cryptocurrency is a digital or virtual form of money that uses
              cryptography for secure transactions.
            </p>
          </div>
          <div className="  md:p-6 ">
            <h2 className="text-sm lg:text-base xl:text-lg xl:font-bold">
              How do I store my cryptocurrencies?
            </h2>
            <p className="text-gray text-[10px] mt-1 opacity-65 lg:text-xs lg:mt-3 xl:text-base">
              Cryptocurrency is a digital or virtual form of money that uses
              cryptography for secure transactions.
            </p>
          </div>
          <div className="  md:p-6 ">
            <h2 className="text-sm lg:text-base xl:text-lg xl:font-bold">
              Is cryptocurrency trading risky?
            </h2>
            <p className="text-gray text-[10px] mt-1 opacity-65 lg:text-xs lg:mt-3 xl:text-base">
              Cryptocurrency is a digital or virtual form of money that uses
              cryptography for secure transactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
