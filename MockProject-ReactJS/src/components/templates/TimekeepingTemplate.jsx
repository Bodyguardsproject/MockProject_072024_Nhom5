import { Badge, Calendar } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constant";
const getListData = (value) => {
  let listData = []; // Specify the type of listData

  switch (value.date()) {
    case 8:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
        {
          type: "error",
          content: "This is error event.",
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: "warning",
          content: "This is warning event",
        },
        {
          type: "success",
          content: "This is very long usual event......",
        },
        {
          type: "error",
          content: "This is error event 1.",
        },
        {
          type: "error",
          content: "This is error event 2.",
        },
        {
          type: "error",
          content: "This is error event 3.",
        },
        {
          type: "error",
          content: "This is error event 4.",
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
export const TimekeepingTemplate = () => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  const navigate = useNavigate();
  return (
    <div className=" max-w-7xl m-auto py-10">
      <div className="grid grid-cols-2 pb-5">
        <p
          className="bg-black text-primary-color text-center text-xl font-semibold py-2 cursor-pointer"
          onClick={() => navigate(`/${PATH.BODYGUARD_WORKSCHEDULE}`)}
        >
          Work schedule
        </p>
        <p className=" bg-primary-color text-center text-xl font-semibold py-2">
          Time keeping
        </p>
      </div>
      <div className=" bg-global-color-primary font-bold rounded-lg flex justify-center gap-20 py-2">
        <div>
          <p className="text-center">200</p>
          <p>Total house</p>
        </div>
        <div>
          <p className="text-center">200</p>
          <p>Total house</p>
        </div>
      </div>
      <Calendar cellRender={cellRender} />
    </div>
  );
};
