import React from "react";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { PATH } from "../../constant";
import { Divider, Popover } from "antd";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { FaCircleUser, FaRegCircleUser } from "react-icons/fa6";
import { IoIosLogOut, IoMdNotificationsOutline } from "react-icons/io";
import {
  MdKeyboardArrowDown,
  MdOutlineIndeterminateCheckBox,
} from "react-icons/md";
const options = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: PATH.ABOUT_US },
  { name: "BodyGuards", path: PATH.BODYGUARDS },
  { name: "Jobs", path: PATH.JOBS },
  { name: "Quote" },
  { name: "Login", path: `/auth/${PATH.LOGIN}` },
];

export default function Header() {
  const content = (
    <div className="flex mx-3 flex-col text-[16px] gap-2 ">
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
          {" "}
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
    <div className="h-[60px] bg-primary-color flex items-center justify-between">
      <Link
        to={"/"}
        className={`h-full w-[200px] bg-no-repeat bg-contain `}
        style={{ backgroundImage: `url(${logo})` }}
      ></Link>
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
      </div>
      <div>
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
  );
}
