import { Divider, Modal } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { GoClock } from "react-icons/go";
import TextArea from "antd/es/input/TextArea";
import Swal from "sweetalert2";

import { getWeekDays } from "../../utils";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constant";
export const WorkScheduleTemplate = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chooseDate, setChooseDate] = useState();
  const [chooseTimeOff, setChooseTimeOff] = useState(false);

  const weekDays = getWeekDays();

  const onClickDate = (date) => {
    showModal();
    setChooseDate(weekDays[date]);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setChooseTimeOff(false);
  };

  return (
    <div className="max-w-7xl m-auto py-5 px-2 sm:px-0">
      <div className="grid grid-cols-2 pb-5">
        <p className="bg-black text-primary-color text-center text-xl font-semibold py-2">
          Work schedule
        </p>
        <p
          className=" bg-primary-color text-center text-xl font-semibold py-2 cursor-pointer"
          onClick={() => navigate(`/${PATH.BODYGUARD_TIME}`)}
        >
          Time keeping
        </p>
      </div>
      <TableS className=" font-semibold w-full">
        <tbody>
          <tr className="  ">
            <td className="px-4 py-4 bg-primary-color ">
              <p className="text-end">Day</p>
              <p className="text-start">Shift</p>
            </td>
            <td className="sm:px-6  w-[50px] sm:w-auto py-4 bg-[#D9D9D9] ">
              Mon
            </td>
            <td className="sm:px-6  w-[50px] sm:w-auto py-4 bg-[#D9D9D9]">
              Tue
            </td>
            <td className="sm:px-6  w-[50px] sm:w-auto py-4 bg-[#D9D9D9]">
              Wed
            </td>
            <td className="sm:px-6  w-[50px] sm:w-auto py-4 bg-[#D9D9D9]">
              Thu
            </td>
            <td className="sm:px-6  w-[50px] sm:w-auto py-4 bg-[#D9D9D9]">
              Fri
            </td>
            <td className="sm:px-6  w-[50px] sm:w-auto py-4 bg-[#D9D9D9]">
              Sat
            </td>
            <td className="sm:px-6  w-[50px] sm:w-auto py-4 bg-[#D9D9D9]">
              Sun
            </td>
          </tr>
          <tr className="h-[300px] ">
            <td className="sm:px-6  w-[50px] sm:w-auto py-4   bg-primary-color">
              Morning shift{" "}
            </td>
            <td
              className="sm:px-6  w-[50px] sm:w-auto py-4 td_hover bg-[#D9D9D9]"
              onClick={() => onClickDate(0)}
            ></td>
            <td
              className="sm:px-6  w-[50px] sm:w-auto py-4 td_hover bg-[#D9D9D9]"
              onClick={() => onClickDate(1)}
            ></td>
            <td
              className="sm:px-6  w-[50px] sm:w-auto py-4 td_hover bg-[#D9D9D9]"
              onClick={() => onClickDate(2)}
            ></td>
            <td
              className="sm:px-6  w-[50px] sm:w-auto py-4 td_hover bg-[#D9D9D9]"
              onClick={() => onClickDate(3)}
            ></td>
            <td
              className="sm:px-6  w-[50px] sm:w-auto py-4 td_hover bg-[#D9D9D9]"
              onClick={() => onClickDate(4)}
            ></td>
            <td
              className="sm:px-6  w-[50px] sm:w-auto py-4 td_hover bg-[#D9D9D9]"
              onClick={() => onClickDate(5)}
            ></td>
            <td
              className="sm:px-6  w-[50px] sm:w-auto py-4 td_hover bg-[#D9D9D9]"
              onClick={() => onClickDate(6)}
            ></td>
          </tr>
          <tr className="h-[300px] ">
            <td className="sm:px-6  w-[50px] sm:w-auto py-4   bg-primary-color">
              Night shift{" "}
            </td>
            <td
              className="sm:px-6  w-[50px] sm:w-auto py-4 td_hover bg-[#D9D9D9]"
              onClick={() => onClickDate(0)}
            ></td>
            <td
              className="sm:px-6  w-[50px] sm:w-auto py-4 td_hover bg-[#D9D9D9]"
              onClick={() => onClickDate(1)}
            ></td>
            <td
              className="sm:px-6  w-[50px] sm:w-auto py-4 td_hover bg-[#D9D9D9]"
              onClick={() => onClickDate(2)}
            ></td>
            <td
              className="sm:px-6  w-[50px] sm:w-auto py-4 td_hover bg-[#D9D9D9]"
              onClick={() => onClickDate(3)}
            ></td>
            <td
              className="sm:px-6  w-[50px] sm:w-auto py-4 td_hover bg-[#D9D9D9]"
              onClick={() => onClickDate(4)}
            ></td>
            <td
              className="sm:px-6  w-[50px] sm:w-auto py-4 td_hover bg-[#D9D9D9]"
              onClick={() => onClickDate(5)}
            ></td>
            <td
              className="sm:px-6  w-[50px] sm:w-auto py-4 td_hover bg-[#D9D9D9]"
              onClick={() => onClickDate(6)}
            ></td>
          </tr>
        </tbody>
      </TableS>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={false}>
        <div className="flex flex-col gap-1 font-semibold  ">
          <p className="text-center">{chooseDate}</p>
          <Divider style={{ borderColor: "rgb(82 82 91)", margin: "0" }} />
          <p>
            Morning Shift: <span>8:00-12:00</span>
          </p>
          <p>
            Address: <span>Washington</span>
          </p>
          {chooseTimeOff === false ? (
            <div className=" flex gap-2 justify-center">
              <button
                className=" bg-primary-color  flex gap-2 justify-center py-1 px-2 rounded-sm "
                onClick={() => setChooseTimeOff(true)}
              >
                <GoClock className="text-xl text-white" />
                <span> Time off request </span>
              </button>
            </div>
          ) : (
            <>
              <p>Please state the reson for your leave request!</p>
              <TextArea />

              <button
                className=" bg-primary-color  flex gap-2 justify-center py-1 px-2 rounded-sm "
                onClick={async () => {
                  await Swal.fire({
                    position: "center",
                    icon: "success",
                    text: "Request submitted successfully! Please wait for approval!",
                    showConfirmButton: false,
                    timer: 1000,
                  });
                  handleCancel();
                  setChooseTimeOff(false);
                }}
              >
                Send
              </button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};
const TableS = styled.table`
  tr,
  td {
    border: 2px solid white;
  }
  td {
    text-align: center;
  }
  td.td_hover {
    transition: 0.4s;
    cursor: pointer;
    &:hover {
      background: white;
    }
  }
`;
