import React from 'react'
import { TableQuotes } from "../../components/ComponentAdmin/index";
export const AdminQuotes = () => {
  return (
    <div className="mt-6 mb-6">
      <div className="flex border-spacing-2 justify-between items-center px-6 py-4">
        <span className="text-[20px] font-bold">Quote</span>
        
      </div>
      <TableQuotes />
    </div>
  )
}

export default AdminQuotes