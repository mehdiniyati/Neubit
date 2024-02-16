import React from "react";

//images
import Linkedin from "../../assets/images/Linkedin.png";
import GitHub from "../../assets/images/GitHub.png";
import Discord from "../../assets/images/Discord.png";
import Skype from "../../assets/images/Skype.png";

const ContactUs = () => {
  return (
    <>
      <div className=" px-6 m-auto">
        <div className="  lg:max-w-screen-2xl mx-auto px-9 grid grid-rows-1 place-items-center md:grid-cols-2 justify-center items-center md:grid-rows-none ">
          <div className=" mt-3 lg:pl-16 lg:my-0  flex flex-col justify-center items-center text-center md:items-start">
            <div className=" lg:h-72 flex flex-col justify-between lg:content-center lg:mt-16">
              <div className=" md:text-left ">
                <h2 className=" text-green text-xl md:text-3xl lg:text-4xl lg:mb-6 ">
                  Get in on the Crypto Action
                </h2>
                <p className="text-[#989898] my-4 text-xs xl:pr-48 lg:text-sm ">
                  Are you ready to step into the dynamic world of
                  cryptocurrencies? Let’s start earning through crypyo trading
                </p>
              </div>
              <div className="grid grid-cols-4 justify-center items-center m-auto md:mx-0 w-60 mb-7 place-items-center cursor-pointer md:justify-start ">
                <img
                  src={Linkedin}
                  alt="Linkedin"
                  className=" w-10 opacity-50 hover:opacity-95 duration-300"
                />
                <img
                  src={GitHub}
                  alt="GitHub"
                  className=" w-10 opacity-50 hover:opacity-95 duration-300"
                />
                <img
                  src={Discord}
                  alt="Discord"
                  className=" w-10 opacity-50 hover:opacity-95 duration-300"
                />
                <img
                  src={Skype}
                  alt="Skype"
                  className=" w-10 opacity-50 hover:opacity-95 duration-300"
                />
              </div>
            </div>
          </div>
          <div className="p-2 my-5 lg:my-16 ">
            <div className="flex flex-col items-center justify-center">
              <div>
                <div className="flex flex-col mb-5">
                  <h2 className="text-[#FDFDFD] text-sm mb-2 ">
                    Email address
                  </h2>
                  <input
                    type="text"
                    placeholder="Enter Email address"
                    className="bg-[#272930] p-3 rounded-md text-xs w-[260px] lg:p-4 lg:w-[450px] text-[#FDFDFD] focus:outline-none "
                  />
                </div>
                <div className="flex flex-col mb-2 justify-center">
                  <h2 className="text-[#FDFDFD] text-sm mb-2">
                    Discussion topic
                  </h2>
                  <input
                    type="text"
                    placeholder="Enter the Discussion topic"
                    className="bg-[#272930] py-3 px-3 rounded-md text-xs w-[260px] lg:pb-20 lg:w-[450px] text-[#FDFDFD]  focus:outline-none "
                  />
                </div>
                <div className="flex justify-center lg:justify-start">
                  <button className=" mt-4 bg bg-buttongreen rounded-full cursor-pointer   py-2 px-5 font-medium text-base lg:px-7  text-dark border-hidden lg:font-bold items-center">
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
