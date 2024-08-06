/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import { MdDashboard, MdFeedback } from "react-icons/md";
import { BiAtom } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { PiLightningFill, PiToolboxFill } from "react-icons/pi";
import { FaFileContract } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
export const SidebarAdmin = () => {
  const location = useLocation(); // Đảm bảo location được khai báo
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromURL = urlParams.get("tab");
    if (tabFromURL) {
      setTab(tabFromURL);
    }
  }, [location.search]);

  return (
    <Sidebar>
      <Sidebar.Items >
        <Sidebar.ItemGroup className="flex flex-col ">
          <Link to="?tab=dash">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item>
              <div
                active={tab === "dash" || !tab}
                className={`flex gap-4 items-center ${
                  tab === "dash"
                    ? "bg-white text-[#463503]"
                    : "bg-primary-color text-text-admin"
                } rounded-lg w-[258px] p-2`}
              >
                <MdDashboard className="text-2xl" />
                <span
                  active={tab === "dash" || !tab}
                  className={`${
                    tab === "dash"
                      ? "text-base text-[#463503]"
                      : "text-base text-text-admin"
                  }`}
                >
                  Dashboard
                </span>
              </div>
            </Sidebar.Item>
          </Link>
          <Link to="?tab=services">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item>
              <div
                active={tab === "services" || !tab}
                className={`flex gap-4 items-center ${
                  tab === "services"
                    ? "bg-white text-[#463503]"
                    : "bg-primary-color text-text-admin"
                } rounded-lg w-[258px] p-2`}
              >
                <BiAtom className="text-2xl" />
                <span
                  active={tab === "services" || !tab}
                  className={`${
                    tab === "services"
                      ? "text-base text-[#463503]"
                      : "text-base text-text-admin"
                  }`}
                >
                  Services
                </span>
              </div>
            </Sidebar.Item>
          </Link>
          <Link to="?tab=accounts">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item>
              <div
                active={tab === "accounts" || !tab}
                className={`flex gap-4 items-center ${
                  tab === "accounts"
                    ? "bg-white text-[#463503]"
                    : "bg-primary-color text-text-admin"
                } rounded-lg w-[258px] p-2`}
              >
                <FaUserAlt className="text-2xl" />
                <span
                  active={tab === "accounts" || !tab}
                  className={`${
                    tab === "accounts"
                      ? "text-base text-[#463503]"
                      : "text-base text-text-admin"
                  }`}
                >
                  Accounts
                </span>
              </div>
            </Sidebar.Item>
          </Link>
          <Link to="?tab=quotes">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item>
              <div
                active={tab === "quotes" || !tab}
                className={`flex gap-4 items-center ${
                  tab === "quotes"
                    ? "bg-white text-[#463503]"
                    : "bg-primary-color text-text-admin"
                } rounded-lg w-[258px] p-2`}
              >
                <ImPriceTag className="text-2xl" />
                <span
                  active={tab === "quotes" || !tab}
                  className={`${
                    tab === "quotes"
                      ? "text-base text-[#463503]"
                      : "text-base text-text-admin"
                  }`}
                >
                  Quotes
                </span>
              </div>
            </Sidebar.Item>
          </Link>
          <Link to="?tab=training">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item>
              <div
                active={tab === "training" || !tab}
                className={`flex gap-4 items-center ${
                  tab === "training"
                    ? "bg-white text-[#463503]"
                    : "bg-primary-color text-text-admin"
                } rounded-lg w-[258px] p-2`}
              >
                <PiLightningFill className="text-2xl" />
                <span
                  active={tab === "training" || !tab}
                  className={`${
                    tab === "training"
                      ? "text-base text-[#463503]"
                      : "text-base text-text-admin"
                  }`}
                >
                  Training
                </span>
              </div>
            </Sidebar.Item>
          </Link>
          <Link to="?tab=contract">
            {" "}
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item>
              <div
                active={tab === "contract" || !tab}
                className={`flex gap-4 items-center ${
                  tab === "contract"
                    ? "bg-white text-[#463503]"
                    : "bg-primary-color text-text-admin"
                } rounded-lg w-[258px] p-2`}
              >
                <FaFileContract className="text-2xl" />
                <span
                  active={tab === "contract" || !tab}
                  className={`${
                    tab === "contract"
                      ? "text-base text-[#463503]"
                      : "text-base text-text-admin"
                  }`}
                >
                  Contract
                </span>
              </div>
            </Sidebar.Item>
          </Link>
          <Link to="?tab=schedule">
            {" "}
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item>
              <div
                className={`flex gap-4 items-center ${
                  tab === "schedule"
                    ? "bg-white text-[#463503]"
                    : "bg-primary-color text-text-admin"
                } rounded-lg w-[258px] p-2`}
              >
                <AiFillSchedule className="text-2xl" />
                <span
                  active={tab === "contract" || !tab}
                  className={`${
                    tab === "contract"
                      ? "text-base text-[#463503]"
                      : "text-base text-text-admin"
                  }`}
                >
                  Schedule
                </span>
              </div>
            </Sidebar.Item>
          </Link>
          <Link to="?tab=feedbacks">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item active={tab === "feedbacks" || !tab}>
              <div
                className={`flex gap-4 items-center ${
                  tab === "feedbacks"
                    ? "bg-white text-[#463503]"
                    : "bg-primary-color text-text-admin"
                } rounded-lg w-[258px] p-2  `}
              >
                <MdFeedback className="text-2xl" />
                <span
                  active={tab === "feedbacks" || !tab}
                  className={`${
                    tab === "feedbacks"
                      ? "text-base text-[#463503]"
                      : "text-base text-text-admin"
                  }`}
                >
                  Feedbacks
                </span>
              </div>
            </Sidebar.Item>
          </Link>
          <Link to="?tab=recruitment">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item>
              <div
                className={`flex gap-4 items-center ${
                  tab === "recruitment"
                    ? "bg-white text-[#463503]"
                    : "bg-primary-color text-text-admin"
                } rounded-lg w-[258px] p-2  `}
              >
                <PiToolboxFill className="text-2xl" />
                <span
                  active={tab === "recruitment" || !tab}
                  className={`${
                    tab === "recruitment"
                      ? "text-base text-[#463503]"
                      : "text-base text-text-admin"
                  }`}
                >
                  Recruitment
                </span>
              </div>
            </Sidebar.Item>
          </Link>
          <Link to="?tab=settings">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item active={tab === "settings" || !tab}>
              <div
                className={`flex gap-4 items-center ${
                  tab === "settings"
                    ? "bg-white text-[#463503]"
                    : "bg-primary-color text-text-admin"
                } rounded-lg w-[258px] p-2  `}
              >
                <IoSettingsSharp className="text-2xl" />
                <span
                  active={tab === "settings" || !tab}
                  className={`${
                    tab === "settings"
                      ? "text-base text-[#463503]"
                      : "text-base text-text-admin"
                  }`}
                >
                  Settings
                </span>
              </div>
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarAdmin;
