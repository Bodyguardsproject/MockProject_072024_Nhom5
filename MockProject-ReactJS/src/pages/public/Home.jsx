import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "antd";
import * as z from "zod";
const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  message: z.string(),
});
const servicesSecurity = [
  {
    label: "Personal Security",
    url: "https://fastguardservice.com/wp-content/uploads/2023/12/Personal-Security.png",
  },
  {
    label: "Event Security",
    url: "https://fastguardservice.com/wp-content/uploads/2023/12/Event-Security.png",
  },
  {
    label: "Asset Security",
    url: "https://fastguardservice.com/wp-content/uploads/2023/12/Personal-Security.png",
  },
  {
    label: "Escort Security",
    url: "https://fastguardservice.com/wp-content/uploads/2024/01/Untitled-design-1-jpg.webp",
  },
];
const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data) => {
    //console.log(data);
  };
  const handleChangeServiceType = (value) => {
    //console.log(`selected ${value}`);
  };
  return (
    <div className="">
      <div
        className={`block relative w-full bg-no-repeat bg-cover bg-center`}
        style={{
          backgroundImage: `url(https://fastguardservice.com/wp-content/uploads/2024/06/IMG_4607.jpg)`,
        }}
      >
        <div className="bg-black/50 pb-6  w-full h-full top-0 px-[5%]">
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="basis-[65%] ">
              <div className="flex mt-20 items-center justify-center flex-col">
                <h1 className="text-white text-3xl md:text-4xl">
                  Security Guard Services
                </h1>
                <h2 className="bg-primary-color text-4xl md:text-5xl px-2 py-1 rounded-sm my-4">
                  FAST GUARD SERVICE
                </h2>
                <h1 className="text-primary-color text-3xl md:text-4xl">
                  Security Guard Company
                </h1>
                <p className="text-white text-base md:text-lg mt-4">
                  Fast Guard Service A national Security Guard Company offering
                  top-tier security solutions Nationwide, including armed and
                  unarmed guards, event security, fire watch, and High-Risk
                  Employee Termination. Our highly trained professionals ensure
                  safety and peace of mind for businesses, events, and
                  residential communities. Contact us today for customized
                  protection plans tailored to your specific needs.
                </p>
              </div>
            </div>
            <div className="basis-[35%]">
              <div className="px-2 mt-10 py-2 rounded-lg shadow-yellow bg-black/40">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-1"
                >
                  <div>
                    <input
                      id="firstName"
                      placeholder="First Name"
                      className="text-sm font-medium px-2 py-2 outline-none rounded-md w-full"
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500 font-medium">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      id="lastName"
                      placeholder="Last Name"
                      className="text-sm font-medium px-2 py-2 outline-none rounded-md w-full"
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-500 font-medium">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      id="email"
                      placeholder="Email"
                      className="text-sm font-medium px-2 py-2 outline-none rounded-md w-full"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 font-medium">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className=" mt-1 flex items-center px-2 py-2 rounded-md  bg-white">
                      <div
                        className={`h-[15px] rounded-sm relative w-[30px] bg-no-repeat bg-cover bg-center`}
                        style={{
                          backgroundImage: `url(https://cdn-icons-png.flaticon.com/256/940/940207.png)`,
                        }}
                      ></div>
                      <input
                        id="phoneNumber"
                        placeholder="Phone Number"
                        className="text-sm px-2 font-medium outline-none rounded-md w-full"
                        {...register("phoneNumber")}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="text-sm text-red-500 font-medium">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>
                  <Select
                    placeholder={"- Select service -"}
                    onChange={handleChangeServiceType}
                    className="w-full mt-1"
                    options={[
                      {
                        value: "Personal Security",
                        label: "Personal Security",
                      },
                      { value: "Event Security", label: "Event Security" },
                      { value: "Asset Security", label: "Asset Security" },
                      { value: "Escort Security", label: "Escort Security" },
                    ]}
                  />
                  <div>
                    <textarea
                      id="message"
                      placeholder="Message"
                      className="text-sm h-[80px] mt-1 font-medium px-2 py-2 outline-none rounded-md w-full"
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 font-medium">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className="text-black w-full text-xl bg-primary-color px-4 py-2 rounded-md text-center my-4"
                    >
                      GET A QUOTATION
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center flex items-center justify-center mt-12">
        Sercurity Services
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[40px] px-5 md:px-20 mt-8">
        {servicesSecurity.map((el, idx) => {
          return (
            <div key={idx} className=" w-[300px] mx-auto">
              <div
                className={`w-full h-[200px]  bg-no-repeat bg-cover bg-center`}
                style={{
                  backgroundImage: `url(${el.url})`,
                }}
              ></div>
              <div className=" bg-primary-color text-center px-3 py-2">
                <p className="text-xl ">{el.label}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mx-5 md:mx-20 h-[0.5px] bg-gray-500 mt-12 mb-8"></div>
      <p className="flex items-center justify-center">About Us</p>
      <div className="px-20">
        <div className="flex mt-8 gap-12">
          <div className="basis-[40%]">
            <div
              className={`w-[80%] h-[250px]  bg-no-repeat bg-cover bg-center`}
              style={{
                backgroundImage: `url(https://fastguardservice.com/wp-content/uploads/2024/06/IMG_4607.jpg)`,
              }}
            ></div>
          </div>
          <div className="basis-[60%]">
            <p className="text-base font-medium">Text</p>
          </div>
        </div>
        <div className="flex mt-8 gap-12">
          <div className="basis-[60%]">
            <p className="text-base font-medium">Text</p>
          </div>
          <div className="basis-[40%]">
            <div
              className={`w-[80%] h-[250px]  bg-no-repeat bg-cover bg-center`}
              style={{
                backgroundImage: `url(https://fastguardservice.com/wp-content/uploads/2024/06/IMG_4607.jpg)`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="mx-20 h-[0.5px] bg-gray-500 mt-12 mb-8"></div>
      <p className="flex items-center justify-center ">Bodyguards</p>
      <div className="px-5 md:px-20 flex-col md:flex-row flex mt-8 gap-4">
        {[1, 2, 3].map((el, idx) => {
          return (
            <div key={idx} className="basis-1/3">
              <div className="px-4 py-4 rounded-md border-gray-400 border-[1px]">
                <div
                  className={`w-full rounded-md h-[450px]  bg-no-repeat bg-cover bg-center`}
                  style={{
                    backgroundImage: `url(https://fastguardservice.com/wp-content/uploads/2024/06/IMG_4607.jpg)`,
                  }}
                ></div>
                <p className="text-2xl mt-2">John Smith</p>
                <p className="text-gray-700 font-normal text-base">
                  Job Title: Chief Executive Officer
                </p>
                <p className="text-gray-500 font-normal text-base mt-1">
                  John has over 20 years of experience in leading multinational
                  companies and driving organizational growth.
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mx-20 h-[0.5px] bg-gray-500 mt-12 mb-8"></div>
      <p className="flex items-center justify-center">Jobs</p>
      <div className="px-20">
        <div className="flex mt-8 gap-12">
          <div className="basis-[40%]">
            <div
              className={`w-[80%] h-[250px]  bg-no-repeat bg-cover bg-center`}
              style={{
                backgroundImage: `url(https://fastguardservice.com/wp-content/uploads/2024/06/IMG_4607.jpg)`,
              }}
            ></div>
          </div>
          <div className="basis-[60%]">
            <p className="text-base font-medium">Text</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
