import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { HiChevronDown } from "react-icons/hi2";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import logo from "../../assets/logo_login.webp";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaRegHandshake,
  FaMedal,
  FaFileSignature,
  FaRegClock,
  FaRegCalendarCheck,
} from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";

import {} from "react-icons/fa6";
const securityServices = [
  {
    url: "https://fastguardservice.com/wp-content/uploads/2023/12/Personal-Security.png",
  },
  {
    url: "https://fastguardservice.com/wp-content/uploads/2023/12/Event-Security.png",
  },
  {
    url: "https://fastguardservice.com/wp-content/uploads/2023/12/Security-Services.png",
  },
  {
    url: "https://fastguardservice.com/wp-content/uploads/2023/12/Consultation.png",
  },
  {
    url: "https://fastguardservice.com/wp-content/uploads/2023/12/fast-guard-app.png",
  },
  {
    url: "https://fastguardservice.com/wp-content/uploads/2023/12/Fire.png",
  },
];
const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  service: z.enum(
    [
      "Personal Security",
      "Event Security",
      "Asset Security",
      "Escort Security",
    ],
    {
      required_error: "You must select a service",
    }
  ),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  message: z.string(),
});
const images = [
  "https://www.westminstersecurity.co.uk/wp-content/uploads/bodyguard-with-sunglasses-and-ear-piece-2400x1602.jpg",
  "https://previews.123rf.com/images/guruxox/guruxox2111/guruxox211100042/176860481-beautiful-professional-female-spy-agent-bodyguard-posing-with-gun-security-police-woman-in-civilian.jpg",
  "https://cdn.pixabay.com/photo/2024/01/03/19/28/ai-generated-8486073_1280.png",
];

const data = [
  {
    name: "Alex Carter",
    title: "Senior Protective Agent",
    description:
      "Alex has over 15 years of experience in providing high-profile security services, including personal protection and threat assessment.",
    image: images[0],
  },
  {
    name: "Sophia Bennett",
    title: "Lead Security Specialist",
    description:
      "Sophia is an expert in advanced security operations and risk management, dedicated to safeguarding high-profile clients and sensitive information.",
    image: images[1],
  },
  {
    name: "Liam Johnson",
    title: "Chief Security Consultant",
    description:
      "Liam brings a wealth of experience in strategic security planning and executive protection, with a focus on preventive measures and crisis management.",
    image: images[2],
  },
];

export const Home = () => {
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [showServices, setShowServices] = useState(false);
  const [service, setService] = useState("");
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div
      onClick={(e) => {
        if (!e.target.closest(".dropdown")) {
          setShowServices(false);
        }
      }}
      className=""
    >
      <div
        className={`block relative w-full bg-no-repeat bg-cover bg-center`}
        style={{
          backgroundImage: `url(https://fastguardservice.com/wp-content/uploads/2024/06/IMG_4607.jpg)`,
        }}
      >
        <div className="bg-black/50 pb-6  w-full h-[600px] top-0 px-[5%]">
          <div className="flex gap-4">
            <div className="md:basis-[70%] xs:basic-[100%]  ">
              <div className="flex items-center justify-center flex-col xs:flex xs:justify-center xs:items-center  md:mt-[40px]">
                <h1 className="text-white mt-10  xs:text-[20px]  md:text-4xl md:font-bold">
                  Security Guard Services
                </h1>
                <h2 className="bg-primary-color  px-2 py-1 rounded-sm my-4  xs:text-[24px] md:text-4xl md:font-bold">
                  FAST GUARD SERVICE
                </h2>
                <h1 className="text-primary-color   xs:text-[20px] md:text-4xl  md:font-bold">
                  Security Guard Company
                </h1>
                <p className="text-white w-full xs:w-full xs:text-[16px]  md:text-2xl  md:font-bold">
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
            <div className="md:basis-[30%] md:block xs:basis-[0%] xs:hidden">
              <div className="px-2 mt-2 py-2 rounded-lg shadow-yellow bg-black/40">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-1"
                >
                  <div className="p-2">
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
                  <div className="p-2">
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
                  <div className="p-2">
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
                  <div className="p-2">
                    <div className=" flex items-center px-2 py-2 rounded-md  bg-white">
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
                  <div className="p-2">
                    <div
                      onClick={() => setShowServices((prev) => !prev)}
                      className="dropdown cursor-pointer flex relative items-center px-2 py-2 rounded-md  bg-white"
                    >
                      <input
                        id="service"
                        readOnly
                        value={service}
                        placeholder="- Select services -"
                        className="dropdown text-sm cursor-pointer font-medium outline-none w-full"
                      />
                      <HiChevronDown />
                      {showServices && (
                        <div className="animate-fadeIn absolute w-full rounded-md overflow-hidden bg-white left-0 top-[110%]">
                          {securityServices.map((el, idx) => {
                            return (
                              <div
                                onClick={() => {
                                  setValue("service", el.label);
                                  setService(el.label);
                                  trigger("service");
                                }}
                                className="px-2 text-sm font-semibold py-2 hover:bg-gray-200 cursor-pointer"
                                key={idx}
                              >
                                {el.label}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    {errors.service && (
                      <p className="text-sm text-red-500 font-medium">
                        {errors.service.message}
                      </p>
                    )}
                  </div>
                  <div className="p-2">
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

      <div>
        <h2 className="text-center  text-[#2c3e50] font-bold flex items-center justify-center mt-12 uppercase md:text-[42px] xs:text-[30px]">
          Security Services
        </h2>
        <div className="grid gap-y-[40px] mt-8 xs:grid-cols-1 sm:grid-cols-2   md:grid-cols-3 ">
          {securityServices.map((el, idx) => {
            return (
              <div
                key={idx}
                className=" mx-auto rounded-lg relative  w-[500px] xs:w-[380px]"
              >
                <div
                  className={`w-full h-[250px]  bg-no-repeat bg-cover bg-center rounded-lg `}
                  style={{
                    backgroundImage: `url(${el.url})`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center mt-20 flex-col">
        <h2 className=" text-[#2c3e50] font-bold  xs:flex xs:justify-center xs:items-center xs:text-[20px]  md:flex justify-center items-center md:text-[42px] ">
          WHY CHOOSE FASTGUARD
        </h2>
        <div className="flex flex-wrap justify-center gap-10 items-center mt-10">
          <div className=" p-2 flex gap-6 justify-center items-center  bg-white shadow-lg shadow-black xs:w-[400px] xs:h-[160px] md:w-[530px] md:h-[142px]">
            <FaRegHandshake className="text-[250px] text-primary-color" />
            <div className="">
              <h2 className="text-[#2c3e50] font-bold text-xl">
                {" "}
                NO LONG TERM CONTRACT
              </h2>{" "}
              Our security guard services are available on a “trial basis.” No
              long term commitment is required! Our security solutions are
              customized.
            </div>
          </div>
          <div className=" p-2 flex gap-6 justify-center items-center  bg-white shadow-lg shadow-black xs:w-[400px] xs:h-[160px] md:w-[530px] md:h-[142px]">
            <FaMedal className="text-[250px] text-primary-color" />
            <div className="">
              <h2 className="text-[#2c3e50] font-bold text-xl">
                {" "}
                FULLY TRAINED SECURITY GUARDS
              </h2>{" "}
              Our security guards are trained to raise the standard of security
              guard services. solutions are customized.
            </div>
          </div>
          <div className=" p-2 flex gap-6 justify-center items-center  bg-white shadow-lg shadow-black xs:w-[400px] xs:h-[160px] md:w-[530px] md:h-[142px]">
            <FaFileSignature className="text-[250px] text-primary-color" />
            <div className="">
              <h2 className="text-[#2c3e50] font-bold text-xl">
                {" "}
                FULLY LICENSED, INSURED & BONDED
              </h2>{" "}
              We carry the necessary insurance coverage for your protection; a
              robust policy for a giant coverage area.
            </div>
          </div>
          <div className=" p-2 flex gap-6 justify-center items-center  bg-white shadow-lg shadow-black  xs:w-[400px] xs:h-[160px] md:w-[530px] md:h-[142px]">
            <FaRegClock className="text-[300px] text-primary-color" />
            <div className="">
              <h2 className="text-[#2c3e50] font-bold text-xl">
                {" "}
                24/7 SECURITY GUARD SERVICES
              </h2>{" "}
              We use Fast Guard App Service, which sends our security guard’s
              LIVE location and performance immediately to you. We also believe
              in communication & 24/7 availability to take your call.
            </div>
          </div>
          <div className=" p-2 flex gap-6 justify-center items-center  bg-white shadow-lg shadow-black  xs:w-[400px] xs:h-[160px] md:w-[530px] md:h-[142px]">
            <RiUserSettingsLine className="text-[250px] text-primary-color" />
            <div className="">
              <h2 className="text-[#2c3e50] font-bold text-xl">
                {" "}
                PROFESSIONAL OFFICE MANAGEMENT & STAFF
              </h2>{" "}
              Fast Guard Service provides professional service to your
              satisfaction. Our work is always done in a timely manner and we
              are available 24/7 to meet your needs.
            </div>
          </div>
          <div className=" p-2 flex gap-6 justify-center items-center  bg-white shadow-lg shadow-black xs:w-[400px] xs:h-[160px] md:w-[530px] md:h-[142px]">
            <FaRegCalendarCheck className="text-[250px] text-primary-color" />
            <div className="">
              <h2 className="text-[#2c3e50] font-bold text-xl">DEDICATION</h2>{" "}
              Our security guard services are available on a “trial basis.” No
              long term commitment is required! Our security solutions are
              customized.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col justify-center items-center ">
        <h2 className=" text-[#2c3e50] font-bold xs:text-[20px] md:text-[42px]  ">
          BODYGUARDS
        </h2>
        <div className="flex-col md:flex-row flex mt-8 gap-4">
          {data.map((item, idx) => (
            <div key={idx} className="basis-1/3">
              <div className="px-4 py-4 rounded-md border-gray-400 border-[1px]">
                <div
                  className="w-full rounded-md h-[450px] bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <p className="text-2xl mt-2 font-bold">{item.name}</p>
                <p className="text-gray-700 font-normal text-base">
                  Job Title: {item.title}
                </p>
                <p className="text-gray-500 font-normal text-base mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-20 mb-2">
        <h2 className=" text-[#2c3e50] font-bold   xs:text-[32px] md:text-[42px] ">
          JOB
        </h2>
        <div className="flex  justify-center items-center gap-4">
          <img
            className="object-cover rounded-lg xs:w-[200px] xs:h-[200px] md:w-[400px] md:h-[220px]"
            src="https://onmilwaukee.com/images/articles/lo/losspreventionagent/losspreventionagent_fullsize_story1.jpg"
            alt=""
          />
          <div>
            <h1 className="xs:text-[12px]">
              <b>Title</b>: Loss Prevention Specialist
            </h1>
            <div className="xs:w-[200px] xs:text-[10px]  md:w-[600px]  md:text-[18px]">
              <b>Description:</b>
              As a Loss Prevention Specialist, you will focus on minimizing
              theft and fraud within retail environmentsDuties include
              monitoring store surveillance, conducting investigations into
              suspicious activities, and implementing loss prevention
              strategies. Strong observational skills, attention to detail, and
              the ability to handle confrontations diplomatically are required.
              Prior experience in retail or security is helpful but not
              essential.
            </div>
            <button className="bg-primary-color text-[#2c3e50]  font-bold  rounded-lg xs:w-[90px] xs:h-[26px] xs:text-[12px] md:w-[130px] md:h-[40px] md:text-xl">
              Apply
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 my-4">
          <img
            className="object-cover rounded-lg  xs:w-[200px] xs:h-[200px] md:w-[400px] md:h-[220px]"
            src="https://media.istockphoto.com/id/1618446911/photo/radio-man-and-a-security-guard-or-safety-officer-outdoor-on-a-city-road-for-communication.webp?b=1&s=170667a&w=0&k=20&c=CUGorRs8FB0BmtP227y-hyfjl-RRlUjEkLWdbyebE-0="
            alt=""
          />
          <div>
            <h1 className="xs:text-[12px]">
              <b>Title</b>:Security Officer
            </h1>
            <div className="xs:w-[200px] xs:text-[10px]  md:w-[600px]  md:text-[18px]">
              <b>Description:</b>
              As a Security Officer, you will be responsible for maintaining a
              secure environment by overseeing surveillance systems, conducting
              regular patrols, and managing access to the facility Your role
              includes responding to incidents, enforcing safety protocols, and
              assisting staff and visitors as needed. Strong attention to
              detail, effective communication skills, and the ability to handle
              emergencies are essential.
            </div>
            <button className="bg-primary-color text-[#2c3e50] font-bold  rounded-lg xs:w-[90px] xs:h-[26px] xs:text-[12px] md:w-[130px] md:h-[40px] md:text-xl">
              Apply
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img
            className=" object-cover rounded-lg  xs:w-[200px] xs:h-[200px] md:w-[400px] md:h-[220px]"
            src="https://www.shutterstock.com/image-photo/security-guards-protecting-business-convention-260nw-2352621839.jpg"
            alt=""
          />
          <div>
            <h1 className="xs:text-[12px]">
              <b>Title</b>: Event Security Coordinator
            </h1>
            <div className="xs:w-[200px] xs:text-[10px]  md:w-[600px]  md:text-[18px]">
              <b>Description:</b>
              As an Event Security Coordinator, you will oversee security
              operations for events and large gatherings. Your role includes
              coordinating with vendors, managing security staff, and ensuring
              the safety of attendees. Key tasks involve conducting risk
              assessments, developing security plans, and responding to
              emergencies
            </div>
            <button className="bg-primary-color text-[#2c3e50] font-bold  rounded-lg xs:w-[90px] xs:h-[26px] xs:text-[12px] md:w-[130px] md:h-[40px] md:text-xl">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
