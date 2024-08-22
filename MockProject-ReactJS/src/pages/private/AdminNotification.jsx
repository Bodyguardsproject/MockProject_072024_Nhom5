import React from "react";
import { TableCustomer, TableNotification } from "../../components/ComponentAdmin/index";
export const AdminNotification = () => {
  return (
    <div className="mt-6 mb-6">
      <div className="flex border-spacing-2 justify-between items-center px-6 py-4">
        <span className="text-[20px] font-bold">Notifications</span>
      </div>
      <TableNotification />
    </div>
  );
};

export default AdminNotification;
