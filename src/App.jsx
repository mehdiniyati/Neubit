import { Routes, Route } from "react-router-dom";
//Components
import { NavbarWithMegaMenu } from "./components/modules/Navbar.jsx";

import HomePage from "./components/templates/HomePage.jsx";
import Login from "./components/modules/Login.jsx";

const App = () => {
  return (
    <>
      <NavbarWithMegaMenu />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
