import React, { useEffect, useState } from "react";

//API
import { PaginationCoins } from "../../services/cryptoApi";
import axios from "axios";

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
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Pagination;
