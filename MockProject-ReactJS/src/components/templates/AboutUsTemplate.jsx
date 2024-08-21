import { Divider } from "antd";
import React from "react";
import styled from "styled-components";
import BannerHomeLayout from "../ui/BannerHomeLayout";
import BannerAllNav from "../ui/BannerAllNav";

export const AboutUsTemplate = () => {
  const content = [
    {
      header: "Our Commitment",
      content:
        "At Fast Guard Service, we prioritize your safety and security above all else. Our team of trained uniformed guards, available armed and unarmed, stands ready 24/7, 365 days a year. We specialize in providing certified crowd managers, ensuring a safe environment for various settings including Fortune 500 companies, celebrities, condominiums, hotels, major events, and nightlife establishments. Since 2013 we have been providing quality security guard services throughout the the USA. Our vision was started with an idea and one guard; since our inception we have grown to more than 18,000 guards and affiliates nationwide. We are proud to have served over 1 million customers nationwide in their time of need, call now to see why they chose Fast Guard Service.",
    },
    {
      header: "Unparalleled Training",
      content:
        "Our guards undergo rigorous, specialized training curated for each assigned post. Equipped with police-style uniforms or attire tailored to client preferences, they are well-prepared to handle any security challenge. Operating our dedicated training facility, we ensure all guards are CPR/AED/First Aid certified, guaranteeing they are equipped to respond effectively in critical situations.",
    },
    {
      header: "Expert Management Team",
      content:
        "Led by experienced professionals in criminal justice and sworn law enforcement, our management team boasts a minimum of a Bachelor’s degree. With a diverse range of certifications including Certified Crowd Manager, Law Enforcement Instructor, Interview and Interrogations, Corrections, K License Firearm Instructor, Wild Land Fire Fighter, and Graduate Level Courses in Public Administration and Management, we bring expertise to every aspect of our services.",
    },
    {
      header: "Our Mission",
      content:
        "Fast Guard Service is dedicated to providing professional security and investigative solutions customized for each client. We pride ourselves on our responsiveness, diligence, and unwavering professionalism, ensuring your peace of mind in every situation.Contact Fast Guard Service today and experience security solutions tailored to your unique needs. Your safety is our priority, and we’re here to safeguard what matters most to you.",
    },
  ];
  return (
    <div className="">
      <BannerAllNav/>
      <BannerHomeLayout contentH3={"About Us"} />
      <div className=" flex flex-col  p-5  sm:pt-10 gap-5  items-center sm:max-w-7xl m-auto sm:flex-row">
        <div className="h-[300px] w-[300px]  rounded-[10px] overflow-hidden ">
          <img
            src="https://fastguardservice.com/wp-content/uploads/2024/01/about-us-main-300x300-1-jpg.webp
        "
            alt="Fast Guard Service px-5"
            className=" w-full h-full"
          />
        </div>
        <div className=" ">
          <h3 className=" uppercase font-bold text-2xl pb-5 ">
            About Fast Guard Service
          </h3>
          <p className=" text-[17 px]">
            Welcome to Fast Guard Service, a premier private security and
            protection agency led and operated by certified law enforcement
            officers.
            <br></br> We take pride in offering top-notch security solutions
            tailored to meet diverse client needs with an unwavering commitment
            to professionalism and safety.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5  max-w-7xl m-auto  p-5">
        {content.map((item, index) => {
          return (
            <div key={index}>
              <h3 className="text-global-color-primary text-2xl font-bold pb-3">
                {item.header}
              </h3>
              <p className=" text-[17px]"> {item.content}</p>
            </div>
          );
        })}
      </div>
      <div className="max-w-7xl m-auto p-5 ">
        <Divider style={{ borderColor: "rgb(82 82 91)" }} />
        <h3 className="text-center underline text-3xl font-bold pb-5">
          Why choose our Services?
        </h3>
        <p className="text-center text-[17xp]">
          At Fast Guard Service, we take pride in delivering unparalleled
          security services to a diverse and prestigious roster of clients. Our
          commitment to maintaining the highest standards of professionalism is
          reflected in the partnerships we have nurtured over the years. From
          residential complexes and educational institutions to banks and
          corporate giants, our client list is a testament to our expertise and
          reliability in the field of security.
        </p>
      </div>
    </div>
  );
};
