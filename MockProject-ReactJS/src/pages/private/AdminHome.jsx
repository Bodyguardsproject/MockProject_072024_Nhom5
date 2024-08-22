import React, { useState, useEffect } from "react";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import logo from "../../assets/logo.jpg";
import { SidebarAdmin, } from "../../components/ComponentAdmin/index";
import { useLocation } from "react-router-dom";
import {
  AdminAccounts,
  AdminContract,
  AdminCustomers,
  AdminDashBoard,
  AdminEquipment,
  AdminFeedbacks,
  AdminNotification,
  AdminQuotes,
  AdminRecruitment,
  AdminSchedule,
  AdminServices,
  AdminTraining,
} from "./index";

export const AdminHome = () => {
  const [tab, setTab] = useState("dash");
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromURL = urlParams.get("tab");
    if (tabFromURL) {
      setTab(tabFromURL);
    }
  }, [location.search]);

  return (
<div className="w-full h-screen flex flex-col md:flex-row">
  <div className="w-[258px]   flex-none ">
    <div className="flex flex-col h-full">
      <img src={logo} alt="logo" className="object-cover w-full h-[100px] " />
      <SidebarAdmin />
    </div>
  </div>
  <div className="flex-1 flex flex-col ">
    <HeaderAdmin />
    <div className="flex-1 overflow-auto">
      {tab === "dash" && <AdminDashBoard />}
      {tab === "services" && <AdminServices />}
      {tab === "accounts" && <AdminAccounts />}
      {tab === "customers" && <AdminCustomers />}
      {tab === "quotes" && <AdminQuotes />}
      {tab === "training" && <AdminTraining />}
      {tab === "contract" && <AdminContract />}
      {tab === "schedule" && <AdminSchedule />}
      {tab === "feedbacks" && <AdminFeedbacks />}
      {tab === "recruitment" && <AdminRecruitment />}
      {tab === "equipment" && <AdminEquipment />}
      {tab === "notification" && <AdminNotification />}

    </div>

  </div>
</div>

  );
};

export default AdminHome;
