import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
export const SidebarProfile = () => {
  return (
    <div className="flex gap-2 items-center mt-6 p-2">
      <Space direction="vertical" size={16}>
        <Space wrap size={16}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Space>
      </Space>
        <div className="flex flex-col">
            <span>Admin</span>
            <span className="text-text-admin">View profile</span>
        </div>
    </div>
  );
};

export default SidebarProfile;
