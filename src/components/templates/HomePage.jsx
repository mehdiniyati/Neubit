import React from "react";

//images
import Bitcoin from "../../assets/images/Bitcoin.png";
import Cryptocurrency from "../../assets/images/Cryptocurrency.png";
import Cryptocurrency2 from "../../assets/images/Cryptocurrency2.png";
import Ethereum from "../../assets/images/Ethereum.png";

const HomePage = () => {
  return (
    <div className="m-auto px-7 py-4 max-w-screen-2xl mt-20 2xl:w-[1320px] relative">
      {/* images position absolote */}
      <img
        src={Bitcoin}
        alt="Bitcoin"
        className="absolute w-9 top-0 right-5 lg:w-fit md:w-14 md:right-14 lg:top-28 animate-wiggle-more animate-infinite animate-duration-[4000ms] animate-ease-in animate-normal animate-fill-backwards"
      />
      <img
        src={Cryptocurrency}
        alt="Cryptocurrency"
        className=" absolute w-9 top-0 lg:w-fit left md:w-14 md:left-14 lg:top-28 lg:right-16 animate-wiggle-more animate-infinite animate-duration-[4000ms] animate-ease-in animate-normal animate-fill-backwards"
      />
      <img
        src={Cryptocurrency2}
        alt="Cryptocurrency2"
        className=" absolute w-9  bottom-14 left-10 md:w-14 md:left-24  lg:w-fit  lg:bottom-10 lg:left-40 animate-wiggle-more animate-infinite animate-duration-[4000ms] animate-ease-in animate-normal animate-fill-backwards"
      />
      <img
        src={Ethereum}
        alt="Ethereum"
        className=" absolute w-9 bottom-14 right-10 md:w-14 md:right-24 lg:w-fit lg:bottom-10 lg:right-40 animate-wiggle-more animate-infinite animate-duration-[4000ms] animate-ease-in animate-normal animate-fill-backwards"
      />
      <div className="flex flex-col justify-center items-center mt-4  lg:mt-20">
        <h1 className=" text-green text-xl font-bold text-center lg:text-6xl xl:text-8xl">
          Trade Crypto with <br />
          Confidence
        </h1>
        <p className="mt-4 text-gray text-center text-xs px-7 lg:text-sm xl:text-xl xl:mt-12">
          Access a Robust Trading Platform Offering Real-Time Data, Intuitive{" "}
          <br /> Tools, and Seamless Execution
        </p>
        <div className=" text-white mt-8">
          <button className="py-2 px-3 bg-buttongreen border-none rounded-full text-dark text-xs font-bold lg:ring-2 lg:ring-greenText  lg:px-6 lg:py-3 xl:px-10 xl:py-3">
            Get started
          </button>
          <button className="bg-bgButton py-2 px-3 rounded-full text-xs font-bold ml-2 text-green ring-1 ring-green lg:px-6 lg:ring-2 lg:py-3 xl:ml-4 xl:px-10 xl:py-3 ">
            Start trading
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
