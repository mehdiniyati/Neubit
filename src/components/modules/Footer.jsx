import React from "react";

//images
import GooglePlay from "../../assets/images/GooglePlay.png";
import AppStore from "../../assets/images/AppStore.png";
import GitHub from "../../assets/images/GitHub.png";
import Discord from "../../assets/images/Discord.png";
import Linkedin from "../../assets/images/Linkedin.png";

const Footer = () => {
  return (
    <>
      <div
        className="flex flex-col items-center lg
       max-w-screen-2xl m-auto rounded-t-xl"
      >
        <div className="px-6 my-10  max-w-screen-2xl">
          <div className="grid grid-rows-2 gap-4 grid-cols-2 pb-10 border-b-2 border-[#2b2b2b]  md:grid-cols-4 md:grid-rows-none lg:gap-44 ">
            <div className=" text-center md:text-left">
              <h2 className="text-[#FDFDFD] text-lg font-bold mb-6">Help</h2>
              <div className="text-[#DCDCDC] cursor-pointer grid gap-3 ">
                <p>Customer Support</p>
                <p>Terms & conditions</p>
                <p>Privacy policies</p>
                <p>FAQs</p>
              </div>
            </div>
            <div className=" text-center md:text-left">
              <h2 className="text-[#FDFDFD] text-lg font-bold mb-6">Others</h2>
              <div className="text-[#DCDCDC] cursor-pointer grid gap-3">
                <p>Start Srading </p>
                <p>Earn free crypto</p>
                <p>Crypto wallet</p>
                <p>Payment options</p>
              </div>
            </div>
            <div className=" text-center md:text-left">
              <h2 className="text-[#FDFDFD] text-lg font-bold mb-6">Company</h2>
              <div className="text-[#DCDCDC] cursor-pointer grid gap-3">
                <p>About us</p>
                <p>Features</p>
                <p>Career</p>
                <p>Contact us</p>
              </div>
            </div>
            <div className=" text-center md:text-left">
              <h2 className="text-[#FDFDFD] text-lg font-bold mb-6">
                Download App
              </h2>
              <div className="text-[#DCDCDC] cursor-pointer grid gap-3">
                <img src={GooglePlay} alt="GooglePlay" className=" lg:w-32" />
                <img src={AppStore} alt="AppStore" className=" lg:w-32" />
              </div>
            </div>
          </div>
          <div className="flex  items-center mt-10 justify-between">
            <div className="text-[#928d8d] text-xs md:text-base">
              <p>Developed with ❤️ at Neubit</p>
            </div>
            <div className="flex items-center">
              <img
                src={GitHub}
                alt="GitHub"
                className="w-10 opacity-50 hover:opacity-95 cursor-pointer duration-300"
              />
              <img
                src={Discord}
                alt="Discord"
                className="w-10 opacity-50 hover:opacity-95 cursor-pointer duration-300 mx-4"
              />
              <img
                src={Linkedin}
                alt="Linkedin"
                className="w-10 opacity-50 hover:opacity-95 cursor-pointer duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
