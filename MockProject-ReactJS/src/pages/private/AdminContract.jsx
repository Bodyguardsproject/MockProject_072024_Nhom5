import React from "react";
import { MdPersonAddAlt1 } from "react-icons/md";
import { TableContract } from "../../components/ComponentAdmin/index";
export const AdminContract = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center p-4">
        <span className="text-2xl font-bold">Contract</span>
        <button className="bg-background-button p-2 rounded-lg flex items-center gap-2">
          <MdPersonAddAlt1 />
          Add Contract
        </button>
      </div>
      <TableContract />
    </div>
  );
};

export default AdminContract;
