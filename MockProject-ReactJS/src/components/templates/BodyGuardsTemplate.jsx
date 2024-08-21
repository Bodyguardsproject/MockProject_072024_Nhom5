import React from "react";
import BannerAllNav from "../ui/BannerAllNav";
import BannerHomeLayout from "../ui/BannerHomeLayout";

export const BodyGuardsTemplate = () => {
  const dataBodyGuards = [
    {
      name: "Nguyen Van B",
      email: "1@gmail.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wUvekZfZ3gDEqfJYIZ0yY1MdkO_dwLkAtQ&s",
      role: "Personal sercurity",
    },
    {
      name: "Nguyen van A",
      email: "1@gmail.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wUvekZfZ3gDEqfJYIZ0yY1MdkO_dwLkAtQ&s",
      role: "Event sercurity",
    },
    {
      name: "Nguyen van A",
      email: "1@gmail.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wUvekZfZ3gDEqfJYIZ0yY1MdkO_dwLkAtQ&s",
      role: "Asset sercurity",
    },
    {
      name: "Nguyen van D",
      email: "1@gmail.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wUvekZfZ3gDEqfJYIZ0yY1MdkO_dwLkAtQ&s",
      role: "Escort serivce",
    },
  ];

  return (
    <div id="content " className="m-auto ">
      <BannerAllNav />
      <BannerHomeLayout contentH3={"Body guards"} />
      {dataBodyGuards.map((info, index) => {
        return (
          <div key={index} className=" mt-5 p-5 max-w-7xl m-auto">
            <div className=" grid grid-cols-2 gap-10">
              <div className=" flex flex-col justify-start py-5 rounded-lg">
                <img
                  src={info.img}
                  alt={info.name}
                  className="object-contain rounded-t-lg "
                />
                <div className=" bg-primary-color h-[50px] flex flex-col justify-center items-center">
                  <p className="font-semibold text-xl">{info.role} </p>
                </div>
              </div>
              <div className={index % 2 !== 0 ? "py-20 -order-1 " : "py-20"}>
                <p>Name:{info.name}</p>
                <p>Email:{info.email}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
