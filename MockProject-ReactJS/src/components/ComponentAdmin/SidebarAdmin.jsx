/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import { MdDashboard, MdFeedback } from "react-icons/md";
import { BiAtom } from "react-icons/bi";
import { FaAccessibleIcon, FaUserAlt } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { PiLightningFill, PiToolboxFill } from "react-icons/pi";
import { FaFileContract } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";

export const SidebarAdmin = () => {
  const location = useLocation(); // Đảm bảo location được khai báo
  const [tab, setTab] = useState("dash");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromURL = urlParams.get("tab");
    if (tabFromURL) {
      setTab(tabFromURL);
    }
  }, [location.search]);

  return (
    <Sidebar>
      <Sidebar.Items className="bg-primary-color h-full w-[258px] ml-[-14px]">
        <Sidebar.ItemGroup className="flex flex-col ">
          <Link to="?tab=dash">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item
              active={tab === "dash" || !tab}
              icon={MdDashboard}
              as="div"
              
            >
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
            </Sidebar.Item>
          </Link>

          <Link to="?tab=services">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item
              active={tab === "services" || !tab}
              icon={BiAtom}
              as="div"
            >
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
            </Sidebar.Item>
          </Link>

          <Link to="?tab=quotes">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item
              active={tab === "quotes" || !tab}
              icon={ImPriceTag}
              as="div"
            >
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
            </Sidebar.Item>
          </Link>     
          
          <Link to="?tab=training">
            <Sidebar.Item
              active={tab === "training" || !tab}
              icon={PiLightningFill}
              as="div"
            >
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
            </Sidebar.Item>
          </Link>

          <Link to="?tab=contract">
            <Sidebar.Item
              active={tab === "contract" || !tab}
              icon={FaFileContract}
              as="div"
            >
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
            </Sidebar.Item>
          </Link>

          <Link to="?tab=schedule">
            <Sidebar.Item
              active={tab === "schedule" || !tab}
              icon={AiFillSchedule}
              as="div"
            >
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
            </Sidebar.Item>
          </Link>

          <Link to="?tab=feedbacks">
            <Sidebar.Item
              active={tab === "feedbacks" || !tab}
              icon={MdFeedback}
              as="div"
            >
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
            </Sidebar.Item>
          </Link>

          <Link to="?tab=recruitment">
            <Sidebar.Item
              active={tab === "recruitment" || !tab}
              icon={PiToolboxFill}
              as="div"
            >
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
            </Sidebar.Item>
          </Link>

          <Link to="?tab=settings">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item
              active={tab === "settings" || !tab}
              icon={IoSettingsSharp}
            >
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
            </Sidebar.Item>
          </Link>
          
          
      
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarAdmin;
