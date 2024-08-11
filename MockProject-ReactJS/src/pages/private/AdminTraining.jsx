import React from "react";
import { MdPersonAddAlt1 } from "react-icons/md";

import {
  TableContract,
  TableTraining,
} from "../../components/ComponentAdmin/index";
export const AdminTraining = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center p-4">
        <span className="text-2xl font-bold">Trainings</span>
        <button className="bg-background-button p-2 rounded-lg flex items-center gap-2">
          {" "}
          <MdPersonAddAlt1 /> Add Trainings
        </button>
      </div>
      <TableTraining />
    </div>
  );
};

export default AdminTraining;
