import React from 'react'
import { TableRecruitment } from "../../components/ComponentAdmin/index";
import { AiOutlineUserAdd } from "react-icons/ai";

export const AdminRecruitment = () => {
  return (
    <div className="mt-6 mb-6">
      <div className="flex border-spacing-2 justify-between items-center px-6 py-4">
        <span className="text-[20px] font-bold">Recruitment</span>
        <div className="flex justify-center items-center gap-2 bg-background-button p-2 rounded-lg cursor-pointer">
          <AiOutlineUserAdd />
          Add Recruitment
        </div>
      </div>
      <TableRecruitment />
    </div>
  )
}

export default AdminRecruitment