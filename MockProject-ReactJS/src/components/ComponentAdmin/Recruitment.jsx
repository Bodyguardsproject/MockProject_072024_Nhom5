import React from "react";
import { MdOutlineInsertComment } from "react-icons/md";
import { AiTwotonePushpin } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
export const Recruitment = () => {
  return (
    <div className="w-full h-[200px] flex justify-between items-center flex-wrap p-2 ">
      <div className="border-2 w-[500px] ">
        <span>Apply</span>
        <div className="flex justify-between items-center gap-2">
          <div className="flex justify-between items-center">
            <div className="flex  items-center gap-2 p-2">
              <MdOutlineInsertComment />
              <span>3</span>
            </div>
            <div className="flex  items-center gap-2 p-2">
              <AiTwotonePushpin />
              <span>3</span>
            </div>
          </div>
          <div className="flex items-center ">
            <FaUserCircle />
            <FaUserCircle />
            <FaUserCircle />
            <FaUserCircle />
          </div>
        </div>
      </div>
      <div className="border-2 w-[500px] ">
        <span>Interview</span>
        <div className="flex justify-between items-center gap-2">
          <div className="flex justify-between items-center">
            <div className="flex  items-center gap-2 p-2">
              <MdOutlineInsertComment />
              <span>3</span>
            </div>
            <div className="flex  items-center gap-2 p-2">
              <AiTwotonePushpin />
              <span>3</span>
            </div>
          </div>
          <div className="flex items-center ">
            <FaUserCircle />
            <FaUserCircle />
            <FaUserCircle />
            <FaUserCircle />
          </div>
        </div>
      </div>
      <div className="border-2 w-[500px] ">
        <span>Denied</span>
        <div className="flex justify-between items-center gap-2">
          <div className="flex justify-between items-center">
            <div className="flex  items-center gap-2 p-2">
              <MdOutlineInsertComment />
              <span>3</span>
            </div>
            <div className="flex  items-center gap-2 p-2">
              <AiTwotonePushpin />
              <span>3</span>
            </div>
          </div>
          <div className="flex items-center">
            <FaUserCircle />
            <FaUserCircle />
            <FaUserCircle />
            <FaUserCircle />
          </div>
        </div>
      </div>
      <div className="border-2 w-[500px] ">
        <span>Accepted</span>
        <div className="flex justify-between items-center gap-2">
          <div className="flex justify-between items-center">
            <div className="flex  items-center gap-2 p-2">
              <MdOutlineInsertComment />
              <span>3</span>
            </div>
            <div className="flex  items-center gap-2 p-2">
              <AiTwotonePushpin />
              <span>3</span>
            </div>
          </div>
          <div className="flex items-center">
            <FaUserCircle />
            <FaUserCircle />
            <FaUserCircle />
            <FaUserCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
