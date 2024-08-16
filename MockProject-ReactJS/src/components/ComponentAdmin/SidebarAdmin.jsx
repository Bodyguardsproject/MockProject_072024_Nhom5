/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import { MdDashboard, MdFeedback } from "react-icons/md";
import { BiAtom } from "react-icons/bi";
import {
  FaAccessibleIcon,
  FaUserAlt,
  FaUserPlus,
  FaToolbox,
} from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { PiLightningFill, PiToolboxFill } from "react-icons/pi";
import { FaFileContract } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import SidebarProfile from "./SidebarProfile";

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
    <Sidebar className="">
      <Sidebar.Items className="bg-primary-color h-full w-[258px] ml-[-14px] ">
        <Sidebar.ItemGroup className="flex flex-col ">
          <Link to="?tab=dash">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item
              active={tab === "dash" || !tab}
              icon={MdDashboard}
              as="div"
            >
              <span>Dashboard</span>
            </Sidebar.Item>
          </Link>
          <Link to="?tab=services">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item
              active={tab === "services" || !tab}
              icon={BiAtom}
              as="div"
            >
              <span>Services</span>
            </Sidebar.Item>
          </Link>
          <Link to="?tab=accounts">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item
              active={tab === "accounts" || !tab}
              icon={FaUserAlt}
              as="div"
            >
              <span>Account</span>
            </Sidebar.Item>
          </Link>
          <Link to="?tab=customers">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item
              active={tab === "customers" || !tab}
              icon={FaUserPlus}
              as="div"
            >
              <span>Customers</span>
            </Sidebar.Item>
          </Link>
          <Link to="?tab=quotes">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item
              active={tab === "quotes" || !tab}
              icon={ImPriceTag}
              as="div"
            >
              <span>Quotes</span>
            </Sidebar.Item>
          </Link>

          <Link to="?tab=training">
            <Sidebar.Item
              active={tab === "training" || !tab}
              icon={PiLightningFill}
              as="div"
            >
              <span>Training</span>
            </Sidebar.Item>
          </Link>

          <Link to="?tab=contract">
            <Sidebar.Item
              active={tab === "contract" || !tab}
              icon={FaFileContract}
              as="div"
            >
              <span>Contract</span>
            </Sidebar.Item>
          </Link>

          <Link to="?tab=schedule">
            <Sidebar.Item
              active={tab === "schedule" || !tab}
              icon={AiFillSchedule}
              as="div"
            >
              <span>Schedule</span>
            </Sidebar.Item>
          </Link>

          <Link to="?tab=feedbacks">
            <Sidebar.Item
              active={tab === "feedbacks" || !tab}
              icon={MdFeedback}
              as="div"
            >
              <span>Feedbacks</span>
            </Sidebar.Item>
          </Link>

          <Link to="?tab=recruitment">
            <Sidebar.Item
              active={tab === "recruitment" || !tab}
              icon={PiToolboxFill}
              as="div"
            >
              <span>Recruitment</span>
            </Sidebar.Item>
          </Link>

          <Link to="?tab=equipment">
            {/* Sử dụng tham số tab trong URL */}
            <Sidebar.Item active={tab === "equipment" || !tab} icon={FaToolbox}>
              <span>Equipment</span>
            </Sidebar.Item>
          </Link>

          <SidebarProfile />
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarAdmin;
