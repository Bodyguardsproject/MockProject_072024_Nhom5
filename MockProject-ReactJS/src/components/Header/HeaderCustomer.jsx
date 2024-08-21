import React, {useState } from "react";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { PATH } from "../../constant";
import { FaUser, FaCircleUser, FaFileContract  } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";
import { IoIosLogOut } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { Divider, Popover } from "antd";

const options = [
  { name: "Home", path: PATH.HOME },
  { name: "Services", path: PATH.SERVICES },
  { name: "About Us", path: PATH.ABOUT_US },
  { name: "BodyGuards", path: PATH.BODYGUARDS },
  { name: "Jobs", path: PATH.JOBS },
  { name: "Quote", path: PATH.CUSTOMERQUOTE },
];

export const HeaderCustomer  = () => {

    const content = (
      <div className="flex mx-3 flex-col text-[16px] gap-2 ">
        <div className="flex my-2 items-center gap-2">
          <FaCircleUser className="text-3xl" />
          <div>
            <p>Username</p>
            <p>Customer</p>
          </div>
        </div>
        <Link
          to={`/customer/${PATH.PROFILE_BODYGUARD}`}
          className="px-2 flex  gap-2 items-center   "
        >
          <FaRegUserCircle className="text-black text-xl hover:text-white duration-300" />
          <span className="text-black hover:text-white duration-300">
            My profile
          </span>
        </Link>
        <Divider style={{ borderColor: "rgb(82 82 91)", margin: "0" }}></Divider>{" "}
        <Link to={`/customer/${PATH.CUSTOMERCONTRACT}`} className="px-2 flex  gap-2 items-center ">
          <FaFileContract className="text-black text-xl hover:text-white duration-300" />
  
          <span className="text-black hover:text-white duration-300">
            Contract
          </span>
        </Link>
        <Divider style={{ borderColor: "rgb(82 82 91)", margin: "0" }}></Divider>{" "}
        <Link to={"/"} className="px-2 flex  gap-2 items-center  ">
          <IoIosLogOut className="text-black text-xl hover:text-white duration-300" />
          <span className="text-black hover:text-white duration-300">
            Log out
          </span>
        </Link>
      </div>
    );

  return (
    <div className="h-[60px] bg-primary-color flex items-center justify-between">
      <div
        className={`h-full w-[200px] bg-no-repeat bg-contain `}
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <div className="flex justify-between items-center">
        {options.map((option, id) => {
          return (
            <Link
              key={option.name}
              to={option?.path}
              className="px-4 py-2 hover:bg-black hover:text-primary-color transition-all cursor-pointer"
            >
              {option.name}
            </Link>
          );
        })}
        <div>
        <Popover
          content={content}
          placement="bottomRight"
          trigger="hover"
          color="#E3C472"
          arrow={false}
        >
          <button className="flex justify-between items-center px-4 py-3 z-50">
            <FaUser />
            <SlArrowDown className="text-[20px] pl-2" />
          </button>
        </Popover>
        </div>
      </div>
    </div>
  );
}

export default HeaderCustomer;
