import React from "react";
import { TableCustomer } from "../../components/ComponentAdmin/index";
export const AdminCustomers = () => {
  return (
    <div className="mt-6 mb-6">
      <div className="flex border-spacing-2 justify-between items-center px-6 py-4">
        <span className="text-[20px] font-bold">Customers</span>
      </div>
      <TableCustomer />
    </div>
  );
};

export default AdminCustomers;
