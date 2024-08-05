import React, { useState } from "react";

import { BiMessageRoundedDots } from "react-icons/bi";
import { Drawer } from "antd";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

import { PATH } from "../../constant";
const MenuMobile = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  PATH;
  return (
    <header>
      <div className=" bg-black h-[30px]"></div>
      <div className=" flex flex-col items-center py-5">
        <img src="./img/logo_header.png" alt="logo " className=" " />
      </div>
      <div className=" flex justify-between px-2 bg-primary-color py-2 items-center">
        <div className="">
          <button onClick={showDrawer}>
            <IoMenu className="text-2xl" />
          </button>
        </div>
        <div className=" text-global-color-primary bg-black flex items-center gap-2 px-7 py-2 rounded">
          <BiMessageRoundedDots />
          <span>Get A Quote</span>
        </div>
      </div>
      <Drawer
        placement={"left"}
        width={200}
        onClose={onClose}
        close
        open={open}
        style={{ background: "#000000A6" }}
        headerStyle={{ height: 10 }}
        extra={
          <div
            className=" h-[25px] w-[25px] cursor-pointer flex justify-center items-center flex-col border-primary-color border-[2px] mt-5"
            onClick={onClose}
          >
            <IoMdClose className="text-primary-color text-xl" />
          </div>
        }
      >
        <div className=" flex flex-col gap-3 font-semibold">
          <Link to={PATH.HOME} className=" !text-primary-color">
            HOME
          </Link>
          <Link to={PATH.SERVICES} className="!text-primary-color">
            SERVICES
          </Link>
          <Link to={PATH.ABOUT_US} className="!text-primary-color">
            ABOUT US
          </Link>
          <Link to={PATH.BODYGUARDS} className="!text-primary-color">
            BODYGUARDS
          </Link>
          <Link to={PATH.JOBS} className="!text-primary-color">
            JOBS
          </Link>
        </div>
      </Drawer>
    </header>
  );
};

export default MenuMobile;
