import React, { useState } from "react";
import { FaFolderPlus } from "react-icons/fa6";
import FormAddShedule from "./FormAddShedule";

export default function WorkSchedule() {
  const [showAddForm, setShowAddForm] = useState(false);
  return (
    <div className="px-5 md:px-20 py-20">
      {!showAddForm && (
        <>
          <div className="flex-col md:flex-row flex w-[70%] mx-auto items-center justify-between">
            <h2 className="text-2xl font-semibold">Schedule</h2>
            <div
              onClick={() => setShowAddForm(true)}
              className="mt-2 md:mt-0 px-4 flex items-center gap-2 cursor-pointer hover:bg-yellow-300 transition-all bg-primary-color py-2 rounded-md"
            >
              <FaFolderPlus />
              <p>Add schedule</p>
            </div>
          </div>
          <div className="overflow-y-auto w-full md:w-[70%] border-[1px] border-gray-300 mt-6 mx-auto">
            <div className="flex">
              <div className="basis-[10%] min-w-[50px]  bg-primary-color text-center py-2 font-semibold">
                ID
              </div>
              <div className="basis-[20%] min-w-[150px] bg-primary-color text-center py-2 font-semibold">
                Name
              </div>
              <div className="basis-[20%] min-w-[100px] bg-primary-color text-center py-2 font-semibold">
                Date
              </div>
              <div className="basis-[30%] min-w-[200px] bg-primary-color text-center py-2 font-semibold">
                Address
              </div>
              <div className="basis-[20%] min-w-[100px]  bg-primary-color text-center py-2 font-semibold">
                Time
              </div>
            </div>
            <div className="">
              {[1, 2, 3, 3, 4, 5].map((el, idx) => {
                return (
                  <div key={idx} className="flex">
                    <div className="basis-[10%] min-w-[50px] text-center py-3 font-light">
                      100
                    </div>
                    <div className="basis-[20%] min-w-[150px] text-center py-3 font-light">
                      Nguyen thanh
                    </div>
                    <div className="basis-[20%] min-w-[100px] text-center py-3 font-light">
                      2023/01/20
                    </div>
                    <div className="basis-[30%] min-w-[200px] text-center py-3 font-light">
                      Washington
                    </div>
                    <div className="basis-[20%] min-w-[100px] flex items-center justify-center text-center py-3 font-light">
                      <div className="px-2 py-1 bg-primary-color rounded-md w-fit">
                        8:00 - 12:00
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
      {showAddForm && <FormAddShedule setShowAddForm={setShowAddForm} />}
    </div>
  );
}
