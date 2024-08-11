import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import {
  TableAccount,
  TableStaff,
  TableBodyguard,
  CreateAcount
} from "../../components/ComponentAdmin/index";

export const AdminAccounts = () => {
  // Tạo một trạng thái để kiểm soát hiển thị
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  return (
    <div>
      {/* Kiểm tra trạng thái để hiển thị CreateAccount hoặc các bảng */}
      {!showCreateAccount ? (
        <div>
          <div className="flex border-spacing-2 justify-between items-center px-6 py-4">
            <span className="text-[20px] font-bold">Account</span>
            {/* Thay đổi trạng thái khi nhấp vào nút */}
            <div
              onClick={() => setShowCreateAccount(true)}
              className="flex items-center gap-2 bg-background-button px-4 py-2 rounded-lg cursor-pointer"
            >
              <FaUserPlus />
              <button className="">Create Account</button>
            </div>
          </div>
          <TableAccount />
          {/* Table Staff */}
          <div className="mt-6 mb-6">
            <div className="flex border-spacing-2 justify-between items-center px-6 py-4">
              <span className="text-[20px] font-bold">Staff</span>
            </div>
            <TableStaff />
          </div>
          {/* Table Bodyguard */}
          <div>
            <div className="flex border-spacing-2 justify-between items-center px-6 py-4">
              <span className="text-[20px] font-bold">Bodyguard</span>
            </div>
            <TableBodyguard />
          </div>
        </div>
      ) : (
        <CreateAcount />
      )}
    </div>
  );
};

export default AdminAccounts;
