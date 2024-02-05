import React from "react";

//images
import google from "../../assets/images/google.svg";
import backgrond from "../../assets/images/backgrond.jpg";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-dvh bg-[#26313c] ">
        <div className=" px-4 mx-4 w-80 h-96 bg-[#16202a] rounded-md lg:flex lg:w-full lg:px-0 lg:mx-20 2xl:mx-80 lg:h-[650px] lg:rounded-xl overflow-hidden xl:shadow-2xl xl:shadow-blue-gray-900">
          <div className=" lg:w-6/12 lg:px-0  lg:flex lg:flex-col lg:items-center lg:justify-center">
            <div className=" text-center lg:text-left lg:w-72 xl:w-80 ">
              <h1 className=" text-white text-xl font-bold mt-8 xl:text-4xl">
                Login
              </h1>
              <p className=" text-gray text-xs opacity-80 mt-2 xl:text-base">
                See your growth and get consulting support!
              </p>
              <button className="  flex items-center justify-center px-5 py-2 text-white opacity-90 text-xs font-medium ring-1 ring-gray mt-6 w-full rounded-full xl:text-base bg-[#16202a] xl:px-6 xl:py-3">
                <img className="w-5" src={google} alt="google" />
                Sign in with Google
              </button>
              <div className="flex flex-col text-left mt-6">
                <label
                  className=" text-gray text-xs mb-2 xl:text-sm"
                  htmlFor="#"
                >
                  Email:
                </label>
                <input
                  className="px-5 py-2 text-white opacity-90 text-xs font-medium ring-1 ring-gray  w-full rounded-full bg-[#16202a] xlpx-6 xl:py-3"
                  type="text"
                  placeholder="moil@website.com"
                />
              </div>
              <div className="flex flex-col text-left mt-5">
                <label
                  className="text-gray text-xs mb-2 xl:text-sm"
                  htmlFor="#"
                >
                  Password:
                </label>
                <input
                  className="px-5 py-2 text-white opacity-90 text-xs font-medium ring-1 ring-gray  w-full rounded-full bg-[#16202a] xlpx-6 xl:py-3 "
                  type="password"
                  placeholder="min.8 character"
                />
              </div>
              <button className="w-full mt-8 bg-[#5d5fef] px-5 py-2 text-white opacity-90 text-xs font-medium rounded-full xl:text-lg xl:font-bold xlpx-6 xl:py-3">
                Login
              </button>
            </div>
          </div>
          <div
            className="bg-cover bg-center w-6/12 hidden lg:block"
            style={{
              backgroundImage: `url(${backgrond})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
