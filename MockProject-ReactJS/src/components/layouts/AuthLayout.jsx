import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/logo_login.webp";
export const AuthLayout = () => {
  return (
    <section className="max-w-[1280px] m-auto sm:py-20  flex flex-col items-center justify-center min-h-screen ">
      <div className="flex  gap-5   flex-col-reverse sm:flex-row">
        <div className=" sm:w-1/2 ">
          <Outlet />
        </div>
        <div className="flex flex-col items-center justify-center sm:w-1/2 m-auto ">
          <img src={logo} alt="logo" className="object-fill " />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
