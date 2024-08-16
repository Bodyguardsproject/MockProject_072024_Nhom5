import React from "react";
import imageServices from "../../assets/servicesImage.png";
import imageServices2 from "../../assets/servicesImage2.png";
import imageServices3 from "../../assets/servicesImage3.png";
import imageServices4 from "../../assets/servicesImage4.png";

export const Services = () => {
  return (
    <div className="bg-white-500 w-full top-[60px]">
      <div className="w-full h-[240px] relative flex justify-center items-center">
        <img
          src="https://fastguardservice.com/wp-content/uploads/2024/01/fgs-header-jpg.webp"
          alt=""
          className="object-center"
        />
        <p className="text-primary-color font-bold text-6xl absolute uppercase">
          SERVICES
        </p>
      </div>
      <div className="w-full p-4">
        <div className="w-full flex justify-center gap-10 items-center">
          <div className="relative">
            <img
              src={imageServices}
              alt=""
              className="w-[400px] h-[297px] object-contain rounded-xl "
            />
            <p className="bg-primary-color text-xl w-full absolute bottom-0 p-2 text-black-500 font-bold flex items-center justify-center">
              Personal security
            </p>
          </div>
          <p className="w-[400px] text-xl ">
            Elite bodyguards providing 24/7 protection for individuals in all
            environments.
          </p>
        </div>
        <div className="w-full flex justify-center gap-10 items-center">
          <div className="relative">
            <img
              src={imageServices2}
              alt=""
              className="w-[400px] h-[297px] object-contain rounded "
            />
            <p className="bg-primary-color text-xl w-full absolute bottom-0 p-2 text-black-500 font-bold flex items-center justify-center">
              Event security
            </p>
          </div>
          <p className="w-[400px] text-xl ">
            Elite bodyguards providing 24/7 protection for individuals in all
            environments.
          </p>
        </div>
        <div className="w-full flex justify-center gap-10 items-center">
          <div className="relative">
            <img
              src={imageServices3}
              alt=""
              className="w-[400px] h-[297px] object-contain rounded "
            />
            <p className="bg-primary-color text-xl w-full absolute bottom-0 p-2 text-black-500 font-bold flex items-center justify-center">
              Asset security
            </p>
          </div>
          <p className="w-[400px] text-xl ">
            Elite bodyguards providing 24/7 protection for individuals in all
            environments.
          </p>
        </div>
        <div className="w-full flex justify-center gap-10 items-center">
          <div className="relative">
            <img
              src={imageServices4}
              alt=""
              className="w-[400px] h-[297px] object-contain  rounded"
            />
            <p className="bg-primary-color text-xl w-full absolute bottom-0 p-2 text-black-500 font-bold flex items-center justify-center">
              Escort serivce
            </p>
          </div>
          <p className="w-[400px] text-xl ">
            Elite bodyguards providing 24/7 protection for individuals in all
            environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
