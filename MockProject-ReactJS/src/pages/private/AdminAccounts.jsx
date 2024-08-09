import React from "react";
import { FaUserPlus } from "react-icons/fa";
import {
  TableAccount,
  TableStaff,
  TableBodyguard,
  CreateAcount
} from "../../components/ComponentAdmin/index";
import { Link } from "react-router-dom";
export const AdminAccounts = () => {
  return (
    <div className="">
      {/* Table Account */}
      <div>
        <div className="flex border-spacing-2 justify-between items-center px-6 py-4">
          <span className="text-[20px] font-bold ">Account</span>
          <Link to={'/admin/create-account'}>
            <div className="flex items-center gap-2 bg-background-button px-4 py-2 rounded-lg cursor-pointer">
              <FaUserPlus />
              <button className="">Create Account</button>
            </div>
          </Link>
        </div>
        <TableAccount />
      </div>
      {/* Table Staff */}
      <div className="mt-6 mb-6">
        <div className="flex border-spacing-2 justify-between items-center px-6 py-4">
          <span className="text-[20px] font-bold ">Staff</span>
        </div>
        <TableStaff />
      </div>
      {/* Table Bodyguard */}
      <div>
        <div className="flex border-spacing-2 justify-between items-center px-6 py-4">
          <span className="text-[20px] font-bold ">Bodyguard</span>
        </div>
        <TableBodyguard />
      </div>
   
    </div>
  );
};

export default AdminAccounts;
