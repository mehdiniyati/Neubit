import React from "react";

//images
import google from "../../assets/images/google.svg";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-dvh ">
      <div className=" px-4 mx-4 w-80 h-96 bg-[#16202a] rounded-md ">
        <div>
          <div className=" text-center">
            <h1 className=" text-white text-xl font-bold mt-8">Login</h1>
            <p className=" text-gray text-xs opacity-80 mt-2">
              See your growth and get consulting support!
            </p>
            <button className="  flex items-center justify-center px-5 py-2 text-white opacity-90 text-xs font-medium ring-1 ring-gray mt-6 w-full rounded-full bg-[#16202a]">
              <img className="w-5" src={google} alt="google" />
              Sign in with Google
            </button>
            <div className="flex flex-col text-left mt-6">
              <label className=" text-gray text-xs mb-2" htmlFor="#">
                Email:
              </label>
              <input
                className="px-5 py-2 text-white opacity-90 text-xs font-medium ring-1 ring-gray  w-full rounded-full bg-[#16202a]"
                type="text"
                placeholder="moil@website.com"
              />
            </div>
            <div className="flex flex-col text-left mt-5">
              <label className="text-gray text-xs mb-2" htmlFor="#">
                Password:
              </label>
              <input
                className="px-5 py-2 text-white opacity-90 text-xs font-medium ring-1 ring-gray  w-full rounded-full bg-[#16202a] "
                type="password"
                placeholder="min.8 character"
              />
            </div>
            <button className="w-full mt-8 bg-[#5d5fef] px-5 py-2 text-white opacity-90 text-xs font-medium rounded-full">
              Login
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Login;
