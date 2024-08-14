import React, { useState } from "react";

import { BiMessageRoundedDots } from "react-icons/bi";
import { Divider, Drawer, Popover } from "antd";
import { IoMenu } from "react-icons/io5";
import {
  IoIosLogOut,
  IoMdClose,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { Link } from "react-router-dom";

import { PATH } from "../../constant";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { FaCircleUser, FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
const MenuMobile = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const content = (
    <div className="flex mx-1 flex-col text-[16px] gap-2 ">
      <div className="flex my-2 items-center gap-2">
        <FaCircleUser className="text-3xl" />
        <div>
          <p>Username</p>
          <p>Bodyguards</p>
        </div>
      </div>
      <Link to={"/"} className="px-2 flex  gap-2 items-center   ">
        <FaRegCircleUser className="text-black text-xl hover:text-white duration-300" />
        <span className="text-black hover:text-white duration-300">
          My profile
        </span>
      </Link>
      <Link to={"/"} className="px-2 flex  gap-2 items-center  ">
        <IoMdNotificationsOutline className="text-black text-xl hover:text-white duration-300 " />
        <span className="text-black hover:text-white duration-300">
          Notification
        </span>
      </Link>
      <Link to={"/"} className="px-2 flex  gap-2 items-center ">
        <MdOutlineIndeterminateCheckBox className="text-black text-xl hover:text-white duration-300" />
        <span className="text-black hover:text-white duration-300">
          Day of request
        </span>
      </Link>
      <Divider style={{ borderColor: "rgb(82 82 91)", margin: "0" }}></Divider>{" "}
      <Link to={"/"} className="px-2 flex  gap-2 items-center ">
        <FaCalendarAlt className="text-black text-xl hover:text-white duration-300" />

        <span className="text-black hover:text-white duration-300">
          Work schedule
        </span>
      </Link>
      <Link to={"/"} className="px-2 flex  gap-2 items-center ">
        <FaCalendarAlt className="text-black text-xl hover:text-white duration-300" />

        <span className="text-black hover:text-white duration-300">
          Training schedule
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
    <header>
      <div className=" bg-black h-[30px]"></div>
      <div className=" flex flex-col items-center py-5">
        <img
          src="https://fastguardservice.com/wp-content/uploads/elementor/thumbs/Fast-Guard-Security-Services-Logo-qhkc1iruqfxj5hawhm5qtjpit7fo84z7ecyjsku7j4.png"
          alt="logo "
          className=" "
        />
      </div>
      <div className=" flex justify-between px-2 bg-primary-color py-2 items-center">
        <div className="">
          <button onClick={showDrawer}>
            <IoMenu className="text-2xl" />
          </button>
        </div>
        <div className=" flex gap-5 items-end">
          <div className=" text-global-color-primary bg-black flex items-center gap-2 px-7 py-2 rounded">
            <BiMessageRoundedDots />
            <span>Get A Quote</span>
          </div>
          <Popover
            content={content}
            placement="bottomRight"
            trigger="click"
            color="#E3C472"
            arrow={false}
          >
            <button className="p-2">
              <FaUser className="text-2xl" />
            </button>
          </Popover>
        </div>
      </div>
      <Drawer
        placement={"left"}
        width={200}
        onClose={onClose}
        close
        open={open}
        style={{ background: "#000000A6" }}
        styles={{ header: { height: 10 } }}
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
