import React, { useState } from "react";

//functions
import convertData from "../../helper/convertData";

const Modal = ({ modal, setModal, chart }) => {
  const [type, setType] = useState("prices");
  console.log(convertData(chart.data, type));
  chart;
  return (
    <div className=" w-full h-full  fixed  bg-[#2E303D] bg-opacity-5 backdrop-blur-sm  z-50">
      <p
        onClick={() => setModal(null)}
        className=" text-red-500 font-bold text-2xl ml-10 border-2 inline-block px-2 rounded-md cursor-pointer"
      >
        X
      </p>
    </div>
  );
};

export default Modal;
