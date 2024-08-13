import { zodResolver } from "@hookform/resolvers/zod";
import { Radio } from "antd";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { useForm } from "react-hook-form";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
  birth: z.string().min(1, "Date of birth is required"),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
});
export default function StaffProfile() {
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [selected, setSelected] = useState();
  const [showDayPicker, setShowDayPicker] = useState(false);
  const [gender, setGender] = useState(1);
  const onSubmit = (data) => {
    console.log(data);
  };

  const onChange = (e) => {
    setGender(e.target.value);
  };
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".dropdown")) {
        setShowDayPicker(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  useEffect(() => {
    if (selected) {
      setValue("birth", selected.toLocaleDateString());
      trigger("birth");
    } else {
      setValue("birth", "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);
  return (
    <div className="px-20 py-12">
      <h1 className="text-2xl font-bold">My profile</h1>
      <p className="">Manage profile information to secure your account</p>
      <div className="flex mt-6 gap-4 flex-col md:flex-row">
        <div className="order-2 md:order-1 basis-[70%]">
          <div className="px-4 py-4 border-[1px] rounded-md border-gray-400">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-1"
            >
              <div className="flex gap-4 md:flex-row flex-col">
                <div className="basis-[50%]">
                  <p className="text-base font-semibold mb-1 ">Name</p>
                  <input
                    id="name"
                    placeholder="Name"
                    className="text-sm border-[1px] font-medium px-2 py-2 outline-none rounded-md w-full"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 font-medium">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="basis-[50%]">
                  <p className="text-base font-semibold mb-1 ">Phone </p>
                  <input
                    id="phoneNumber"
                    placeholder="Phone Number"
                    className="text-sm border-[1px] font-medium px-2 py-2 outline-none rounded-md w-full"
                    {...register("phoneNumber")}
                  />
                  {errors.phoneNumber && (
                    <p className="text-sm text-red-500 font-medium">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <p className="text-base font-semibold mb-1 mt-1">Email </p>
                <input
                  id="email"
                  placeholder="Email"
                  className="text-sm border-[1px] font-medium px-2 py-2 outline-none rounded-md w-full"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 font-medium">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <p className="text-base font-semibold mb-1 mt-1">Address</p>
                <input
                  id="address"
                  placeholder="Address"
                  className="text-sm border-[1px] font-medium px-2 py-2 outline-none rounded-md w-full"
                  {...register("address")}
                />
                {errors.address && (
                  <p className="text-sm text-red-500 font-medium">
                    {errors.address.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <p className="text-base font-semibold mb-1 mt-1">
                  Date of birth
                </p>
                <div
                  onClick={() => setShowDayPicker((prev) => !prev)}
                  className="text-sm font-semibold dropdown px-4 py-2 rounded-md border-[1px] inline-block cursor-pointer"
                >
                  {selected
                    ? selected.toLocaleDateString()
                    : "- Select date of birth -"}
                </div>
                {showDayPicker && (
                  <div className="dropdown absolute bg-white px-4 py-4 rounded-md shadow-lg z-20 select-none">
                    <DayPicker
                      mode="single"
                      selected={selected}
                      onSelect={setSelected}
                      hideNavigation
                      captionLayout="dropdown"
                    />
                  </div>
                )}
                {errors.birth && (
                  <p className="text-sm text-red-500 font-medium">
                    {errors.birth.message}
                  </p>
                )}
              </div>
              <div>
                <p className="text-base font-semibold mb-1 mt-1">
                  Please select gender
                </p>
                <Radio.Group onChange={onChange} value={gender}>
                  <Radio value={1}>
                    <p className="text-base font-normal">Male</p>
                  </Radio>
                  <Radio value={2}>
                    <p className="text-base font-normal">Female</p>
                  </Radio>
                </Radio.Group>
              </div>
              <div className="flex items-center justify-end gap-4">
                <button className="text-black font-bold  bg-primary-color px-6 py-2 rounded-md text-center my-4">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-black font-bold bg-primary-color px-6 py-2 rounded-md text-center my-4"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="order-1 md:order-2 basis-[30%]">
          <div className="px-4 py-4 border-[1px] rounded-md border-gray-400">
            <div className="flex items-center gap-4">
              <div
                className={`block h-[50px] w-[50px] bg-no-repeat rounded-full bg-cover bg-center`}
                style={{
                  backgroundImage: `url(https://fastguardservice.com/wp-content/uploads/2024/06/IMG_4607.jpg)`,
                }}
              ></div>
              <div>
                <p className="font-bold text-lg">John Smith</p>
                <p className="text-sm font-medium text-gray-600">
                  johnsmith@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
