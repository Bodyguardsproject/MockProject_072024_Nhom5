import React from "react";
import { GrLogout } from "react-icons/gr";
import { FaQuestion } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from "antd";
import { Input } from "antd";
export const HeaderAdmin = () => {
  return (
    <div className=" bg-white z-10 p-2 shadow-md">
      <div className="p-2 flex justify-end gap-4 items-center">
        <div className="w-40 bg-background-button h-9 rounded-lg flex justify-center items-center cursor-pointer">
          <GrLogout data-testid="logout-icon" />
          <span>Login</span>
        </div>
        <span className="cursor-pointer p-2" data-testid="question-icon">
          <FaQuestion />
        </span>
        <span className="cursor-pointer p-2" data-testid="settings-icon">
          <IoSettingsOutline />
        </span>
        <span className="cursor-pointer p-2" data-testid="bell-icon">
          <FaRegBell />
        </span>
        <Space direction="vertical" size={16} className="cursor-pointer" data-testid="user-avatar">
          <Space wrap size={30}>
            <Avatar size={30} icon={<UserOutlined />} />
          </Space>
        </Space>
      </div>
      <div className="flex justify-center items-center mt-2">
        <></>
        <Input
          size="large"
          placeholder="Search..."
          prefix={<IoSearch />}
          style={{border:"1px solid #3498db",margin:"auto",width:"500px",height:"35px"}}
          maxLength={100}
        />
        <></>
      </div>
    </div>
  );
};

export default HeaderAdmin;
