import React, { useState, useEffect } from "react";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import logo from "../../assets/logo.jpg";
import { SidebarAdmin } from "../../components/ComponentAdmin/index";
import { useLocation } from "react-router-dom";
import {
  AdminAccounts,
  AdminContract,
  AdminDashBoard,
  AdminFeedbacks,
  AdminQuotes,
  AdminRecruitment,
  AdminSchedule,
  AdminServices,
  AdminSettings,
  AdminTraining,
} from "./index";

export const AdminHome = () => {
  const [tab, setTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromURL = urlParams.get("tab");
    if (tabFromURL) {
      setTab(tabFromURL);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen  flex flex-col md:flex-row fixed top-0 bottom-0">
      <div
        className="md:w-[258px]  flex-shrink-0 bg-primary-color bg-no-repeat bg-contain  "
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div className="mt-14 flex-col ">
          <SidebarAdmin />
        </div>
      </div>
      <div className="flex-1 w-[1200px] flex-col bg-red-400">
        <HeaderAdmin />

        {tab === "dash" && <AdminDashBoard />}
        {tab === "services" && <AdminServices />}
        {tab === "accounts" && <AdminAccounts />}
        {tab === "quotes" && <AdminQuotes />}
        {tab === "training" && <AdminTraining />}
        {tab === "contract" && <AdminContract />}
        {tab === "schedule" && <AdminSchedule />}
        {tab === "feedbacks" && <AdminFeedbacks />}
        {tab === "recruitment" && <AdminRecruitment />}
        {tab === "settings" && <AdminSettings />}
      </div>
    </div>
  );
};

export default AdminHome;
