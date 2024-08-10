import React from 'react'
import { TableEquipment } from "../../components/ComponentAdmin/index";
import { AiOutlineUserAdd } from "react-icons/ai";
export const AdminEquipment = () => {
  return (
    <div className="mt-6 mb-6">
    <div className="flex border-spacing-2 justify-between items-center px-6 py-4">
      <span className="text-[20px] font-bold">Equipments</span>
      <div className="flex justify-center items-center gap-2 bg-background-button p-2 rounded-lg cursor-pointer">
        <AiOutlineUserAdd />
        Add Equipment
      </div>
    </div>
    <TableEquipment />
  </div>
  )
}

export default AdminEquipment