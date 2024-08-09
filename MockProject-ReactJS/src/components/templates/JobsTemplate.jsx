import React from "react";
import BannerHomeLayout from "../ui/BannerHomeLayout";
import styled from "styled-components";
import { Divider } from "antd";

export const JobsTemplate = () => {
  const expContent = [
    "Must have valid sercurity license as required by the Stare ( if applicable)",
    "Must be a U.S citizen or foreign authorized to legally work in the United States",
    "Must have valid sercurity license as required by the Stare ( if applicable)",
    "Must be a U.S citizen or foreign authorized to legally work in the United States",
  ];
  return (
    <>
      <BannerHomeLayout contentH3={"Sercurity guard jobs"} />
      <div className="  sm:max-w-7xl m-auto py-10 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREnzehhgvuqJoChyupShsktPUFzZCIipRmog&s"
            alt="avatar"
            className="place-self-center w-full rounded-lg"
          />
          <div className=" flex flex-col gap-4">
            <Div_Styled className="col-span-1  items-center px-5">
              <h2 className="font-extrabold text-xl ">Benefis And Rewards</h2>
            </Div_Styled>
            <p>
              <span className=" font-bold">Fast Guard Service </span> offers
              exitting carceer opportunities for squalified individuals in the
              fields of{" "}
              <span className=" font-bold">Sercurity and investigations</span>.
              If you are looking to join our organization please fill out the
              application and include your{" "}
              <span className="font-bold">Resume/CV</span>
            </p>{" "}
            <Div_Styled className="col-span-1  items-center px-5">
              <h2 className="font-extrabold text-xl ">Benefis And Rewards</h2>
            </Div_Styled>
            <>
              <Divider style={{ borderColor: "rgb(82 82 91)" }} />
              {expContent.map((item, index) => {
                return (
                  <div key={index}>
                    <p>{item}</p>
                    <Divider style={{ borderColor: "rgb(82 82 91)" }} />
                  </div>
                );
              })}
            </>
          </div>
        </div>
        <div className=" my-4">
          <div className="flex  justify-center    text-2xl font-bold">
            <p className="  basis-1/3 sm:basis-0 text-center sm:text-nowrap">
              Full-time
            </p>
            <P_Styled>
              {" "}
              <p className=" text-center">Part-time</p>
            </P_Styled>
            <p className="  basis-1/3  sm:basis-0 text-center  sm:text-nowrap">
              On-call opening
            </p>
          </div>
          <p className="text-center mt-2">
            Thank you for your interest in Fast Guard Service. Below you will
            find our available opportunities
          </p>
        </div>

        <div className=" flex flex-col gap-4">
          <Div_Styled className="col-span-1 items-center px-5">
            <h2 className="font-extrabold text-xl uppercase ">open position</h2>
          </Div_Styled>
          <p>
            Thank you for your interest in Fast Guard Service. Below you will
            find our available opportunities
          </p>
        </div>
      </div>
    </>
  );
};
const Div_Styled = styled.div`
  position: relative;
  /* text-align: center; */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 6px;
    height: 100%;
    background-color: #d2a52e;
  }
`;

const P_Styled = styled.div`
  position: relative;
  margin: 0 20px;
  &::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 0;
    width: 3px;
    height: 100%;
    background-color: black;
  }
  &::after {
    content: "";
    position: absolute;
    right: -10px;
    top: 0;
    width: 3px;
    height: 100%;
    background-color: black;
  }
`;
