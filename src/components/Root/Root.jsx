import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="md:w-full mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <div className="max-w-7xl mx-auto">
        
      </div>
    </div>
  );
};

export default Root;
