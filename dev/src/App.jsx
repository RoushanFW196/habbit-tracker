import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import WelComeUser from "./components/WelComeUser";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Navbar user={{ name: "roushan" }} />
      <Outlet />
    </>
  );
}

export default App;
