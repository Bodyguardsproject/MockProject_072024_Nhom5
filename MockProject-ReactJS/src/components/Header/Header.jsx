import React from "react";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { PATH } from "../../constant";
const options = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: PATH.ABOUT_US },
  { name: "BodyGuards", path: PATH.BODYGUARDS },
  { name: "Jobs", path: PATH.JOBS },
  { name: "Quote" },
];
export default function Header() {
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
      </div>
    </div>
  );
}
