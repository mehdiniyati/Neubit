import React, { useState } from "react";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

//functions
import convertData from "../../helper/convertData";

const Modal = ({ modal, setModal, chart }) => {
  const [type, setType] = useState("prices");
  console.log(convertData(chart.data, type));
  chart;
  return (
    <div className=" w-full h-full flex flex-col items-center xl:block fixed top-0   bg-[#2E303D] bg-opacity-5 backdrop-blur-sm  z-50">
      <p
        onClick={() => setModal(null)}
        className=" text-red-500 mt-20 font-bold text-2xl xl:ml-10 border-2 inline-block px-2 rounded-md cursor-pointer"
      >
        X
      </p>
      <div className="flex flex-col justify-center items-center w-[310px] mt-20 xl:mt-32  xl:w-[800px] xl:m-auto xl:p-20 bg-[#18181ce6] rounded-2xl xl:border-2 xl:border-bor ">
        <div className=" w-[300px] h-[200px] xl:w-[760px] xl:h-[300px] ">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={400}
              height={400}
              data={convertData(chart.data, type)}
            >
              <Line
                type={"monotone"}
                dataKey={type}
                stroke="#00FFA3"
                strokeWidth="1px"
              />
              <CartesianGrid stroke="#404042" />
              <YAxis
                dataKey={type}
                domain={["auto", "auto"]}
                stroke="#00FFA3"
              />
              <XAxis dataKey={Date} stroke="#00FFA3" />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Modal;
