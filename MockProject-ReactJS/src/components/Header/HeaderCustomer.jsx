import React, {useState } from "react";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { PATH } from "../../constant";
import { FaUser, FaCircleUser, FaFileContract  } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";
import { IoIosLogOut } from "react-icons/io";

const options = [
  { name: "Home", path: PATH.HOME },
  { name: "Services", path: PATH.SERVICES },
  { name: "About Us", path: PATH.ABOUT_US },
  { name: "BodyGuards", path: PATH.BODYGUARDS },
  { name: "Jobs", path: PATH.JOBS },
  { name: "Quote", path: PATH.CUSTOMERQUOTE },
];

export const HeaderCustomer  = () => {
    const [showMenu, setShowMenu] = useState(false);
  
    const handleToggleMenu = () => {
      setShowMenu(!showMenu);
    };

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
        <div onClick={handleToggleMenu} className="relative flex justify-between items-center px-4 py-3 hover:bg-black hover:text-primary-color transition-all cursor-pointer z-50">
            <FaUser />
            <div className="text-[10px] pl-2">
                <SlArrowDown />
            </div> 
            {showMenu && (
              <div className="absolute w-[150px] right-0 top-[50px] text-global-color-text bg-amber-100 p-4">
                <a href="#" className=" inline-flex items-center box-border space-x-2 py-1.5 hover:text-primary-color hover:bg-black hover:min-w-[120px]">
                  <FaCircleUser />
                  <span>My profile</span>
                </a>
                <a href="#" className="inline-flex items-center box-border space-x-2 py-1.5 hover:text-primary-color hover:bg-black hover:min-w-[120px]">
                  <FaFileContract />
                  <span>Contract</span>
                </a>
                <a href="#" className="inline-flex items-center box-border space-x-2 py-1.5 hover:text-primary-color hover:bg-black hover:min-w-[120px]">
                  <IoIosLogOut />
                  <span>Log out</span>
                </a>
            </div>
            )}   
        </div>
      </div>
    </div>
  );
}

export default HeaderCustomer;
