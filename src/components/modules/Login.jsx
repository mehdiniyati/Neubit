import React, { useEffect, useState } from "react";

//react-router-dom
import { Link } from "react-router-dom";

//toast alert
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../functions/Validate";

//images
import google from "../../assets/images/google.svg";
import backgrond from "../../assets/images/backgrond.jpg";

//functions
import { validate } from "../../functions/Validate";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState([]);
  const [toch, setToch] = useState({});
  const [lOginError, setLOginError] = useState([]);

  useEffect(() => {
    setError(validate(data));
  }, [data]);

  const clickHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onClickHandler = (e) => {
    setToch({ ...toch, [e.target.name]: true });
  };
  const handleSubmit = (e) => {
    e = e.preventDefault();
    if (Object.keys(error).length > 2) {
      notify("error", "The values are not correct");
    } else {
      notify("success", "You have successfully logged in");
    }

    if (Object.keys(error).length < 3) {
      setData({
        email: "",
        password: "",
      });
      setToch({
        email: false,
        password: false,
      });
    } else {
      console.log(error);
      setToch({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center h-dvh bg-[#26313c] ">
          <div className=" px-4 py-6 mx-4 w-80  bg-[#16202a] rounded-md lg:flex lg:w-full lg:px-0 lg:mx-20 2xl:mx-80 lg:h-[650px]  lg:rounded-xl overflow-hidden xl:shadow-2xl xl:shadow-blue-gray-900">
            <div className=" lg:w-6/12 lg:px-0  lg:flex lg:flex-col lg:items-center lg:justify-center">
              <div className=" text-center lg:text-left lg:w-72 xl:w-72 1xl:w-80 ">
                <h1 className=" text-white text-xl font-bold mt-8 xl:text-4xl">
                  Login
                </h1>
                <p className=" text-gray text-xs opacity-80 mt-2 xl:text-base">
                  See your growth and get consulting support!
                </p>
                <button className="  flex items-center justify-center px-5 py-2 text-white opacity-90 text-xs font-medium ring-1 ring-gray lg:ring-2  mt-6 w-full rounded-full xl:text-base bg-[#16202a] xl:px-6 xl:py-3">
                  <img className="w-5" src={google} alt="google" />
                  Login in with Google
                </button>
                <div className="flex flex-col text-left mt-6">
                  <label
                    className=" text-gray text-xs mb-2 xl:text-sm"
                    htmlFor="#"
                  >
                    Email:
                  </label>
                  <input
                    className="px-5 py-2 text-white opacity-90 text-xs font-medium ring-1 ring-gray lg:ring-2  w-full rounded-full bg-[#16202a] xlpx-6 xl:py-3"
                    type="email"
                    placeholder="moil@website.com"
                    value={data.email}
                    onChange={clickHandler}
                    name="email"
                    onClick={onClickHandler}
                  />
                  {error.email && toch.email ? (
                    <span className=" text-gray text-xs p-1 bg-[#e11d48] font-bold rounded-lg inline-block w-36 mt-2">
                      {error.email}
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-col text-left mt-5">
                  <label
                    className="text-gray text-xs mb-2 xl:text-sm"
                    htmlFor="#"
                  >
                    Password:
                  </label>
                  <input
                    className="px-5 py-2 text-white opacity-90 text-xs font-medium ring-1 ring-gray lg:ring-2   w-full rounded-full bg-[#16202a] xlpx-6 xl:py-3 "
                    type="password"
                    placeholder="min.8 character"
                    value={data.password}
                    onChange={clickHandler}
                    name="password"
                    onClick={onClickHandler}
                  />

                  {error.password && toch.password ? (
                    <span className="text-gray text-xs p-1 bg-[#e11d48] font-bold rounded-lg inline-block w-52 mt-2">
                      {error.password}
                    </span>
                  ) : null}
                </div>
                <button
                  onClick={notify}
                  type="submit"
                  className="w-full mt-8 bg-[#5d5fef] px-5 py-2 lg:ring-2 lg:ring-[#5d5fef] text-white opacity-90 text-xs font-medium rounded-full xl:text-lg xl:font-bold xlpx-6 xl:py-3"
                >
                  Login
                </button>
                <ToastContainer />
                <div className="w-full text-center mt-5">
                  <p className="text-gray text-sm font-semibold">
                    Not registered yet ?{" "}
                    <Link to="/signup" className=" text-[#5d5fef]">
                      Create an account
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-center w-7/12 hidden lg:block  rounded-bl-full rounded-tl-full shadow-lg "
              style={{
                backgroundImage: `url(${backgrond})`,
              }}
            ></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
