import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import { NavbarWithMegaMenu } from "./components/modules/Navbar.jsx";

import HomePage from "./components/templates/HomePage.jsx";
import Login from "./components/modules/Login.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarWithMegaMenu />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
