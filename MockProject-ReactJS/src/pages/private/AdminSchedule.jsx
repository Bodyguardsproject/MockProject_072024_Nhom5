import { Table } from "antd";
import React from "react";

export const AdminSchedule = () => {
  const dataSource = [
    {
      key: "1",
      id: "001",
      name: "Mike",
      date: "2023-08-13",
      time: "09:30 AM",
      address: "10 Downing Street",
    },
    {
      key: "2",
      id: "002",
      name: "John",
      date: "2023-08-14",
      time: "10:00 AM",
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
      align: "center",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      align: "center",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      align: "center",
      render: (_, record) => (
        <div className="bg-primary-color w-3/4 p-1">
          <p className="">{record.time}</p>{" "}
        </div>
      ),
    },
  ];
  return (
    <div className=" px-5 py-10">
      <h1 className=" text-2xl font-bold mb-5"> Schedule </h1>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default AdminSchedule;
