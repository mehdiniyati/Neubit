import React, { useEffect, useState } from "react";

//API
import { PaginationCoins } from "../../services/cryptoApi";
import axios from "axios";

//img
import Rice from "../../assets/images/Rise.png";
import descent from "../../assets/images/descent.png";
import { color } from "framer-motion";

const Pagination = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getCoin = () => {
      const res = axios
        .get(PaginationCoins(page))
        .then((res) => setCoins(res.data));
    };

    getCoin();
  }, [page]);

  const PreviousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
    console.log(page);
  };

  const nextHandler = () => {
    if (page > 9) return;
    setPage((page) => page + 1);
    console.log(page);
  };

  return (
    <div>
      <div className="mt-20 flex flex-col justify-center ">
        <table className=" w-full ">
          <thead className=" text-sm flex justify-center items-center ">
            <tr className="text-white mt-2  flex justify-center items-center border-b-2 border-dark3 pb-5">
              <th className="flex cursor-pointer mr-7  items-center w-16 lg:w-40 md:w-24 justify-start text-xs md:text-sm lg:text-lg lg:ml-2  ">
                Name
              </th>
              <th className="w-16 text-left md:w-24 lg:w-40">Price</th>
              <th className="w-16 md:w-24  text-left lg:w-40 text-[10px] md:text-sm lg:text-lg mr-2 lg:ml-2">
                24h
              </th>
              <th className="w-16 text-[10px] text-left md:w-24 md:text-sm lg:text-lg lg:w-40  lg:mr-3">
                Chart
              </th>
            </tr>
          </thead>
          <tbody className="">
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>

        <div className=" text-white flex justify-center my-5 mx-2 lg:my-14">
          <button
            onClick={PreviousHandler}
            className="bg-[bgButton] w-14  py-1 mr-2 text-xs   text-white ring-1 ring-green  rounded-lg lg:w-20 lg:py-3"
          >
            Previous
          </button>
          <p
            className=" text-xs py-1 px-2 ring-1 ring-green rounded-md ml-4 lg:py-3 lg:px-3"
            style={{ color: page === 1 ? "#00FFA3" : "inherit" }}
          >
            1
          </p>
          <p
            className=" text-xs py-1 px-2 ring-1 ring-green rounded-md ml-2 lg:py-3 lg:px-3"
            style={{ color: page === 2 ? "#00FFA3" : "inherit" }}
          >
            2
          </p>
          <span className=" ml-2 flex ">
            {page > 2 && page < 9 ? (
              <p
                className="text-xs py-1 px-2 ring-1 ring-green rounded-md mx-1 lg:py-3 lg:px-3"
                style={{ color: page > 2 && page < 9 ? "#00FFA3" : "inherit" }}
              >
                {page}
              </p>
            ) : (
              <p className="text-xs py-1 px-2  mx-1 lg:py-3 lg:px-3">...</p>
            )}
          </span>
          <p
            className=" text-xs py-1 px-2 ring-1 ring-green rounded-md ml-2 lg:py-3 lg:px-3"
            style={{ color: page === 9 ? "#00FFA3" : "inherit" }}
          >
            9
          </p>
          <p
            className=" text-xs py-1 px-2 ring-1 ring-green rounded-md mr-4 ml-2 lg:py-3 lg:px-3"
            style={{ color: page === 10 ? "#00FFA3" : "inherit" }}
          >
            10
          </p>
          <button
            onClick={nextHandler}
            className="bg-[bgButton] w-14 py-1 text-xs   text-white ring-1 ring-green  rounded-lg lg:w-20 lg:py-3"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

const TableRow = ({
  coin: {
    id,
    image,
    name,
    current_price,
    price_change_percentage_24h: price_change,
  },
}) => {
  return (
    <tr className="text-white mt-2  flex justify-center items-center  ">
      <td className="flex cursor-pointer mr-7  items-center w-16 h-12 lg:w-40 md:w-24 justify-start text-xs md:text-sm lg:text-lg lg:mt-5  ">
        <img
          className="w-4 mr-3  lg:mr-4 md:w-8 lg:w-10 cursor-pointer"
          src={image}
          alt={id}
        />
        {name}
      </td>
      <td className="w-16 md:w-24 lg:w-40  flex items-center justify-start text-[10px] md:text-sm lg:text-lg  lg:mt-5 ">
        {current_price.toLocaleString()}
      </td>
      <td
        className={
          price_change < 0
            ? "w-16 md:w-24 text-left lg:w-40 text-[10px] md:text-sm lg:text-lg flex items-center justify-start text-[#FA1E39] lg:mt-5 lg:mr-3"
            : "w-16 md:w-24 text-left lg:w-40 text-[10px] md:text-sm lg:text-lg flex items-center justify-start text-green lg:mt-5 lg:mr-3"
        }
      >
        {price_change > 0
          ? `+ ${price_change.toFixed(2)} %`
          : ` ${price_change.toFixed(2)} %`}
      </td>
      <td className="w-16 md:w-24 lg:w-40 flex justify-start items-center lg:mt-5 lg:mr-3">
        {price_change > 0 ? (
          <img src={Rice} alt="Rice" className="w-10 md:w-16 lg:w-24" />
        ) : (
          <img src={descent} alt="descent" className="w-10 md:w-16 lg:w-24" />
        )}
      </td>
    </tr>
  );
};
