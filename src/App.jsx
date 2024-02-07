import { Routes, Route } from "react-router-dom";
//Components
import { NavbarWithMegaMenu } from "./components/modules/Navbar.jsx";

import HomePage from "./components/templates/HomePage.jsx";
import Login from "./components/modules/Login.jsx";
import SignUp from "./components/modules/SignUp.jsx";

const App = () => {
  return (
    <>
      <NavbarWithMegaMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
