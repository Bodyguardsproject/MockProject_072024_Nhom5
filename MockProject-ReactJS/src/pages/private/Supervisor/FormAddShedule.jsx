import React from "react";
import PropTypes from "prop-types";
import { z } from "zod";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DatePicker, TimePicker } from "antd";
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  id: z
    .string()
    .min(1, "ID must be at least 1 character long")
    .regex(/^\d+$/, "ID must be a string of numeric characters"),
  address: z.string().min(1, "Address is required"),
  date: z.string().min(1, "Date is required"),
  timestart: z.string().min(1, "Time start is required"),
  timeend: z.string().min(1, "Time end is required"),
});
export default function FormAddShedule({ setShowAddForm }) {
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const onChange = (date, dateString) => {
    if (dateString) {
      setValue("date", dateString);
      trigger("date");
    } else {
      setValue("date", "");
      trigger("date");
    }
  };
  const onChangeTimeStart = (time, timeString) => {
    if (timeString) {
      setValue("timestart", timeString);
      trigger("timestart");
    } else {
      setValue("timestart", "");
      trigger("timestart");
    }
  };
  const onChangeTimeEnd = (time, timeString) => {
    if (timeString) {
      setValue("timeend", timeString);
      trigger("timeend");
    } else {
      setValue("timeend", "");
      trigger("timeend");
    }
  };
  return (
    <div className=" w-full md:w-[70%] flex mx-auto">
      <div className="w-full py-6 px-4 md:px-12 border-[1px] border-gray-600 rounded-xl">
        <h2 className="text-2xl font-semibold">Add New Schedule</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
          <div className="md:flex-row flex-col flex gap-4 mt-4">
            <div className=" basis-[70%]">
              <p className="text-base font-semibold mb-1 ">Name</p>
              <input
                id="name"
                placeholder="Name"
                className="text-sm w-full md:w-[70%] border-[1px] font-medium px-2 py-2 outline-none rounded-md"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-red-500 font-medium">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="basis-[30%]">
              <p className="text-base font-semibold mb-1 ">ID</p>
              <input
                id="id"
                placeholder="ID"
                className="text-sm w-[50%] md:w-[70%] border-[1px] font-medium px-2 py-2 outline-none rounded-md"
                {...register("id")}
              />
              {errors.id && (
                <p className="text-sm text-red-500 font-medium">
                  {errors.id.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-2">
            <p className="text-base font-semibold mb-1 ">Date</p>

            <DatePicker
              className="font-medium  w-[50%] md:w-[30%]"
              onChange={onChange}
            />
            {errors.date && (
              <p className="text-sm text-red-500 font-medium">
                {errors.date.message}
              </p>
            )}
          </div>
          <div className="mt-2">
            <p className="text-base font-semibold mb-1 ">Address</p>
            <input
              id="address"
              placeholder="Address"
              className="text-sm w-full md:w-[70%] border-[1px] font-medium px-2 py-2 outline-none rounded-md"
              {...register("address")}
            />
            {errors.address && (
              <p className="text-sm text-red-500 font-medium">
                {errors.address.message}
              </p>
            )}
          </div>
          <div className="mt-2 md:flex-row flex-col flex gap-4">
            <div className="">
              <p className="text-base font-semibold mb-1 ">Time start</p>
              <TimePicker
                onChange={onChangeTimeStart}
                className="font-medium w-[50%] md:w-[100%]"
                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
              />
              {errors.timestart && (
                <p className="text-sm text-red-500 font-medium">
                  {errors.timestart.message}
                </p>
              )}
            </div>
            <div className="">
              <p className="text-base font-semibold mb-1 ">Time end</p>
              <TimePicker
                onChange={onChangeTimeEnd}
                className="font-medium  w-[50%] md:w-[100%]"
                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
              />
              {errors.timeend && (
                <p className="text-sm text-red-500 font-medium">
                  {errors.timeend.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-center mt-3 gap-2">
            <div
              onClick={() => {
                setShowAddForm(false);
              }}
              className="bg-primary-color cursor-pointer hover:bg-yellow-300 transition-all px-4 py-2 rounded-md font-bold"
            >
              Cancel
            </div>
            <button
              type="submit"
              className="bg-primary-color cursor-pointer hover:bg-yellow-300 transition-all px-4 py-2 rounded-md font-bold"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
FormAddShedule.propTypes = {
  setShowAddForm: PropTypes.func.isRequired,
};
