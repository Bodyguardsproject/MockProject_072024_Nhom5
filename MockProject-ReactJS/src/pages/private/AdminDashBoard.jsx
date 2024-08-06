import React from "react";
import {
  TableAdmin,
  Chart,
  Recruitment,
  BarChartAdmin,
} from "../../components/ComponentAdmin/index";
import { AiOutlineUserAdd } from "react-icons/ai";
import { LuFilter } from "react-icons/lu";
import { CgExport } from "react-icons/cg";
export const AdminDashBoard = () => {
  return (
    <div className="">
      <div className="p-4 flex justify-between items-center">
        <span className="tex-2xl font-bold">Employees</span>
        <div className="flex justify-center items-center gap-2 bg-background-button p-2 rounded-lg cursor-pointer">
          <AiOutlineUserAdd />
          Add Employee
        </div>
      </div>
      <TableAdmin />
      <div className="p-4 flex gap-6 items-center">
        <span className="tex-2xl font-bold">Revenue Report Over Time</span>
        <div className="flex justify-center items-center gap-4 cursor-pointer">
          <div className="flex justify-center items-center gap-2">
            <LuFilter />
            Filter
          </div>
          <div className="flex justify-center items-center gap-2">
            <CgExport />
            Export
          </div>
        </div>
      </div>
      <Chart />
      <div>
        <span className="tex-2xl font-bold">Recruitment</span>
        <Recruitment />
      </div>
      <div className="p-4 h-[200px]  flex gap-6 items-center">
        <span className="tex-2xl font-bold">Revenue Report Over Time</span>
        <div className="flex justify-center items-center gap-4 cursor-pointer">
          <div className="flex justify-center items-center gap-2">
            <LuFilter />
            Filter
          </div>
          <div className="flex justify-center items-center gap-2">
            <CgExport />
            Export
          </div>
        </div>
      </div>
      <BarChartAdmin/>
    </div>
  );
};

export default AdminDashBoard;
