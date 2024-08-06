import React from "react";
import { Outlet } from "react-router-dom";

export const Public = () => {
  return (
    <div className="text-3xl font-bold">
      <Outlet />
    </div>
  );
};

export default Public;
