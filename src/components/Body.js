import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isDark = useSelector((store) => store.theme.isDark);

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [isDark]);

  return (
    <div className="flex pt-20">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
