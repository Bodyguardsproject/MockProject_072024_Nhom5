import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Divider, Popover } from "antd";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { FaCircleUser, FaRegCircleUser } from "react-icons/fa6";
import { IoIosLogOut, IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import logo from "../../assets/logo.jpg";
import { PATH } from "../../constant";

export default function Header() {
  const [tokenExist, setTokenExits] = useState(false);
  const [decoded, setDecoded] = useState(undefined);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setDecoded(decodedToken);
      setTokenExits(true);
    } else {
      setTokenExits(false);
    }
  }, [tokenExist]);

  const options = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: PATH.ABOUT_US },
    { name: "BodyGuards", path: PATH.BODYGUARDS },
    { name: "Jobs", path: PATH.JOBS },
    { name: "Quote" },
  ];

  const content = (
    <div className="flex mx-3 flex-col text-[16px] gap-2 ">
      <div className="flex my-2 items-center gap-2">
        <FaCircleUser className="text-3xl" />
        <div>
          <p>{decoded !== undefined ? decoded.email : "Username"}</p>
          <p>Bodyguards</p>
        </div>
      </div>
      <Link
        to={`/user/${PATH.PROFILE_BODYGUARD}`}
        className="px-2 flex  gap-2 items-center   "
      >
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
      <Link
        to={`/${PATH.BODYGUARD_WORKSCHEDULE}`}
        className="px-2 flex  gap-2 items-center "
      >
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
      <Divider style={{ borderColor: "rgb(82 82 91)", margin: "0" }} />
      <Link
        to={"/"}
        className="px-2 flex  gap-2 items-center "
        onClick={() => {
          Cookies.remove("token");
          setTokenExits(false);
        }}
      >
        <IoIosLogOut className="text-black text-xl hover:text-white duration-300" />
        <span className="text-black hover:text-white duration-300">
          Log out
        </span>
      </Link>
    </div>
  );
  return (
    <div className="h-[60px] bg-primary-color flex items-center justify-between pr-2">
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
        {tokenExist === false ? (
          <Link
            to={`/auth/${PATH.LOGIN}`}
            className="px-4 py-2 hover:bg-black hover:text-primary-color transition-all cursor-pointer"
          >
            Login
          </Link>
        ) : (
          <Popover
            content={content}
            placement="bottomRight"
            trigger="hover"
            color="#E3C472"
            arrow={false}
          >
            <button className="p-2">
              <FaUser className="text-2xl" />
            </button>
          </Popover>
        )}
      </div>
    </div>
  );
}
