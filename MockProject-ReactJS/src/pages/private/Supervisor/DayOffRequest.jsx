import { Table } from "antd";
import React, { useState } from "react";
import DayOffRequestDetail from "./DayOffRequestDetail";
const dataSource = [
  {
    id: "1",
    phonenumber: "091239123",
    task: `Personal Security
Protect Ms. Smith on the trip to visit the President of Russia`,
    reasonLeave: "Requesting leave due to dengue fever",
    timeRequest: "18:32:30 06/08/2024",
    name: "Mike",
    dayLeave: ["2/12/2024", "3/12/2024"],
    status: "Pending approval",
  },
  {
    id: "2",
    phonenumber: "081238323",
    task: `Personal Security
Protect Ms. Smith on the trip to visit the President of Russia`,
    reasonLeave: "Requesting leave due to dengue fever",
    timeRequest: "18:32:30 06/08/2024",
    shiftOff: "Morning",
    name: "Mike",
    dayLeave: ["07/08/2024"],
    status: "Approved",
  },
];

const columns = [
  {
    title: "ID",
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
    title: "Date of Request leave",
    dataIndex: "dayLeave",
    key: "dayLeave",
    width: "35%",
    align: "center",
    render: (text) => {
      return <span>{text[0]}</span>;
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    align: "center",
    render: (text) => (
      <div
        className={`${text === "Pending approval" && "bg-yellow-400"} ${
          text === "Approved" && "bg-green-400"
        } ${
          text === "Rejected" && "bg-red-500"
        }  px-3  py-1 rounded-md !inline-block text-white `}
      >
        {text}
      </div>
    ),
  },
];
export default function DayOffRequest() {
  const [dayOffSlt, setDayOffSlt] = useState();
  const handleRowClick = (record) => {
    setDayOffSlt(record);
    // Perform any action here
  };
  return (
    <div className="px-5 md:px-20 py-20">
      <>
        <div className="flex-col md:flex-row flex w-[70%] mx-auto items-center justify-between">
          <h2 className="text-2xl font-semibold">Approve day-off request</h2>
        </div>
        <div className="flex md:w-[70%] mt-3 mx-auto">
          <div className="w-full ">
            <Table
              dataSource={dataSource}
              rowKey={"id"}
              onRow={(record) => ({
                onClick: () => handleRowClick(record),
                style: { cursor: "pointer" }, // Attach click handler
              })}
              columns={columns}
            ></Table>
          </div>
        </div>
      </>
      {dayOffSlt && (
        <DayOffRequestDetail
          dayOffSlt={dayOffSlt}
          setDayOffSlt={setDayOffSlt}
        />
      )}
    </div>
  );
}
