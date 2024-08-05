import { Space, Table, Tag } from "antd";
import { useState, useEffect } from "react";

// Định nghĩa cột cho bảng
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

export const TableAdmin = () => {
  const [data, setData] = useState([]);

  // Hàm lấy dữ liệu từ API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin/data'); // Thay thế với endpoint API của bạn
        const result = await response.json();
        if (response.ok) {
          setData(result); // Cập nhật dữ liệu dựa trên cấu trúc phản hồi của API
        } else {
          console.error('Lấy dữ liệu thất bại:', result.message);
        }
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-auto">
      <Table
        className="overflow-auto"
        columns={columns}
        dataSource={data}
        scroll={{
          y: 240,
        }}
      />
    </div>
  );
};

export default TableAdmin;
