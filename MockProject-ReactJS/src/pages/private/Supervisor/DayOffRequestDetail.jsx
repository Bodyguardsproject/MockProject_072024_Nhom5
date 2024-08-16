import React from "react";
import PropTypes from "prop-types";
import { FaCalendarDays, FaClock } from "react-icons/fa6";
import { Calendar } from "antd";
import dayjs from "dayjs";
export default function DayOffRequestDetail({ dayOffSlt, setDayOffSlt }) {
  const handleTurnOffModal = (e) => {
    if (e.target.classList.contains("modal")) {
      setDayOffSlt(null);
    }
  };
  // dayLeave = ["2/12/2024", "3/12/2024"],
  const selectedDays = dayOffSlt.dayLeave.map((date) =>
    dayjs(date, "D/M/YYYY")
  );
  const fullCellRender = (value) => {
    const formattedValue = value.format("D/M/YYYY");
    const isSelected = selectedDays.some((day) => day.isSame(value, "day"));
    return (
      <div
        className={`ant-picker-cell-inner ${
          isSelected ? "bg-blue-500 text-white rounded-full" : ""
        } `}
      >
        {value.date()}
      </div>
    );
  };

  return (
    <div
      onClick={handleTurnOffModal}
      className="modal z-[21] fixed top-0 animate-fadeIn right-0 left-0 bottom-0 bg-black/10"
    >
      <div className="h-[95vh] absolute bg-white px-6 pt-6 pb-6 w-[90%] md:w-[45%] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] rounded-xl">
        <h1 className="text-2xl font-semibold pb-2">Day-off-request detail</h1>
        <div className="max-h-[95%] overflow-y-auto">
          <div className="flex mt-4 gap-4">
            <div className="basis-[50%]">
              <p className="font-medium">Name</p>
              <div className="mt-1 px-4 py-1 rounded-md border-[1px] border-gray-400">
                {dayOffSlt?.name}
              </div>
            </div>
            <div className="basis-[50%]">
              <p className="font-medium">Phone number</p>
              <div className="mt-1 px-4 py-1 rounded-md border-[1px] border-gray-400">
                {dayOffSlt?.phonenumber}
              </div>
            </div>
          </div>
          {dayOffSlt?.shiftOff && (
            <div className="inline-block mt-2">
              <p className="font-medium">Shift off</p>
              <div className="px-4 mt-1 py-1 rounded-md border-[1px] border-gray-400">
                {dayOffSlt.shiftOff}
              </div>
            </div>
          )}
          {dayOffSlt.dayLeave.length === 1 && (
            <div className=" mt-2">
              <p className="font-medium">Date of request leave</p>
              <div className="inline-flex items-center gap-4 px-4 mt-1 py-1 rounded-md border-[1px] border-gray-400">
                {dayOffSlt.dayLeave[0]}
                <FaCalendarDays className="text-gray-600" />
              </div>
            </div>
          )}
          {dayOffSlt.dayLeave.length > 1 && (
            <div className=" mt-2 relative pointer-events-none">
              <p className="font-medium absolute top-[10px]">
                Date of request leave
              </p>
              <Calendar
                defaultValue={selectedDays[0]}
                fullscreen={false}
                fullCellRender={fullCellRender}
              />
            </div>
          )}
          <div className=" mt-2">
            <p className="font-medium">Assigned tasks</p>
            <div className="px-4 min-h-[100px] mt-1 py-1 rounded-md border-[1px] border-gray-400">
              {dayOffSlt?.task}
            </div>
          </div>
          <div className=" mt-2">
            <p className="font-medium">Reason leave</p>
            <div className="px-4 min-h-[80px] mt-1 py-1 rounded-md border-[1px] border-gray-400">
              {dayOffSlt?.reasonLeave}
            </div>
          </div>
          <div className=" mt-2">
            <p className="font-medium">Time of request submission</p>
            <div className="px-4 inline-flex gap-3 items-center  mt-1 py-1 rounded-md border-[1px] border-gray-400">
              {dayOffSlt?.timeRequest}
              <FaClock className="text-gray-600" />
            </div>
          </div>
          <div className="flex mt-4 items-center gap-8 justify-center">
            <div className="px-3 py-1 bg-red-500 cursor-pointer hover:bg-red-600 transition-all rounded-md font-semibold">
              Reject
            </div>
            <div className="px-3 py-1 bg-yellow-400 cursor-pointer hover:bg-yellow-500 transition-all rounded-md font-semibold">
              Approve
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
DayOffRequestDetail.propTypes = {
  setDayOffSlt: PropTypes.func.isRequired,
  dayOffSlt: PropTypes.any,
};
