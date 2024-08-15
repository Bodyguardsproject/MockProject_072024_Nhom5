import { DatePicker, Table } from "antd";
import Column from "antd/es/table/Column";
import ColumnGroup from "antd/es/table/ColumnGroup";
import React from "react";
const dataSource = [
  {
    id: "1",
    name: "Mike",
    totalhours: 32,
    dayoff: 2,
    status: "completed",
  },
  {
    id: "2",
    name: "Mike",
    totalhours: 32,
    dayoff: 2,
    status: "incompleted",
  },
  {
    id: "3",
    name: "Mike",
    totalhours: 32,
    dayoff: 2,
    status: "in progress",
  },
];

const columns = [
  {
    title: "Bodyguard ID",
    dataIndex: "id",
    key: "id",
    width: "15%",
    align: "center",
  },
  {
    title: "Name",
    dataIndex: "name",
    width: "25%",
    key: "name",
    align: "center",
  },
  {
    title: "Total hours",
    dataIndex: "totalhours",
    key: "totalhours",
    width: "15%",
    align: "center",
  },
  {
    title: "Day off",
    dataIndex: "dayoff",
    key: "dayoff",
    width: "15%",
    align: "center",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    align: "center",
    render: (text) => (
      <div
        className={`${text === "in progress" && "bg-yellow-400"} ${
          text === "completed" && "bg-green-400"
        } ${
          text === "incompleted" && "bg-red-500"
        }  px-2 py-1 rounded-md inline-block text-white `}
      >
        {text}
      </div>
    ),
  },
];
export default function TimeKeeping() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="px-5 md:px-20 py-20">
      <div className="flex-col md:flex-row flex w-[70%] mx-auto items-center justify-between">
        <h2 className="text-2xl font-semibold">Time keeping</h2>
      </div>
      <div className="flex-col md:flex-row  mt-2 flex w-[70%] mx-auto items-center justify-between">
        <DatePicker
          onChange={onChange}
          picker="month"
          className="font-medium"
        />
        <div className="mt-2 md:mt-0 px-6 flex items-center gap-2 cursor-pointer hover:bg-yellow-300 transition-all bg-primary-color py-2 rounded-md">
          <p>Edit</p>
        </div>
      </div>
      <div className="flex md:w-[70%] mt-3 mx-auto">
        <div className="w-full supervisor-table">
          <Table
            dataSource={dataSource}
            rowKey={"id"}
            columns={columns}
          ></Table>
        </div>
      </div>
    </div>
  );
}
