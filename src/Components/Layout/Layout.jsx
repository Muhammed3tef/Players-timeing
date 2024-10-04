import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [Dark, setDark] = useState(false);

  function mood() {
    setDark(!Dark);
  }
  return (
    <>
      <div className={Dark ? "appDark" : "app"}>
        <Navbar Dark={Dark} mood={mood} />
        <div className="container testr">
          <Outlet />
        </div>
      </div>
    </>
  );
}
