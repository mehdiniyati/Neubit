import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";

//usecontext
import { createContext } from "react";
//axios
import axios from "axios";

//Components
import { NavbarWithMegaMenu } from "./components/modules/Navbar.jsx";
import HomePage from "./components/templates/HomePage.jsx";
import Login from "./components/modules/Login.jsx";
import SignUp from "./components/modules/SignUp.jsx";

//API
import { getCoinList } from "./services/cryptoApi.jsx";

//useefect
import { useEffect } from "react";

export const ContextCoins = createContext();

const App = () => {
  const [coins, setcoins] = useState([]);
  useEffect(() => {
    const getCoins = () => {
      axios.get(getCoinList()).then((res) => setcoins(res.data));
    };

    getCoins();
  }, []);

  return (
    <>
      <ContextCoins.Provider value={coins}>
        <NavbarWithMegaMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </ContextCoins.Provider>
    </>
  );
};

export default App;
