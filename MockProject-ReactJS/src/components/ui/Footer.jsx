import React from "react";
import {
  FaCamera,
  FaCarAlt,
  FaFileSignature,
  FaMapMarkerAlt,
  FaPhone,
  FaUserClock,
  FaUserSecret,
} from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Footer = () => {
  //content footer example
  const contentHeaderFooter = [
    {
      icon: (
        <FaUserClock className=" text-3xl sm:text-5xl text-global-color-primary " />
      ),
      text: "Open 24 Hours",
    },
    {
      icon: (
        <FaUserSecret className=" text-3xl sm:text-5xl text-global-color-primary " />
      ),
      text: "Security Guards",
    },
    {
      icon: (
        <FaCarAlt className=" text-3xl sm:text-5xl text-global-color-primary " />
      ),
      text: "Emergency Security",
    },
    {
      icon: (
        <FaCamera className=" text-3xl sm:text-5xl text-global-color-primary " />
      ),
      text: "Surveillance",
    },
    {
      icon: (
        <FaFileSignature className=" text-3xl sm:text-5xl text-global-color-primary " />
      ),
      text: "Licensed & Insured",
    },
  ];
  //example  service
  const serviceArray = [
    "FIRE WATCH GUARDS",
    "EVENT STAFFING",
    "EXECUTIVE SECURITY",
    "LOSS PREVENTION",
    "BODYGUARDS",
    "PRIVATE INVESTIGATORS",
    "CCTV INSTALLATIONS",
  ];

  //config Slick
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,

    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //content slick
  const contentSlick = [
    "./img/burlington.webp",
    "./img/catimini.webp",
    "./img/fendi-casa.webp",
    "./img/toysrus.webp",
    "./img/Sports-Authority.webp",
    "./img/Marathon.webp",
    "./img/logo_radisson.webp",
    "./img/logo_polo.webp",
  ];
  return (
    <footer>
      <div className="bg-black ">
        <div className=" m-auto  flex-wrap flex justify-between py-[10px] flex-col max-w-xl sm:flex-row sm:max-w-7xl">
          {contentHeaderFooter.map((item, index) => {
            return (
              <div
                className=" flex flex-col justify-center items-center p-[10px]"
                key={index}
              >
                <> {item.icon}</>

                <p className=" text-global-color-primary font-semibold sm:text-[20px] text-[16px]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="slick ">
        <div className=" max-w-7xl grid m-auto py-[20px]  grid-cols-1 gap-2">
          <DivSlick_Styled className="col-span-1 py-[10px] items-center px-5">
            <h2 className="font-extrabold text-xl ">OUR VALUABLE CLIENTS</h2>
          </DivSlick_Styled>
          <div>
            <Slider {...settings}>
              {contentSlick.map((content, index) => {
                return (
                  <div
                    className=" cursor-pointer !flex flex-col items-center"
                    key={index}
                  >
                    <img
                      src={content}
                      alt={`logo_${index}`}
                      className=" object-center"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <Div_styled>
        <div className="content_footer m-auto  grid grid-rows-3 grid-flow-col gap-10 py-[25px] text-white  sm:grid-cols-3 sm:grid-flow-col sm:grid-rows-none  sm:max-w-7xl">
          <div className="flex flex-col justify-center items-center">
            <img src="./img/logo_footer.png" alt="logo" />
            <p className="text-center text-[14px] sm:text-[16px]">
              As one of the top Security Guard Service providers in the nation,
              we provide thorough, responsive, and professional guards on call
              24/7
            </p>
          </div>
          <div className=" px-5">
            <h2 className="text-global-color-primary font-semibold text-xl ">
              SERVICES
            </h2>
            <div className=" flex flex-col gap-1 px-[15px]  mt-2  text-[14px] sm:text-[16xp] ">
              {serviceArray.map((item, index) => {
                return (
                  <a href="#" key={index}>
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="text-global-color-primary font-semibold text-xl">
              CONTACTS
            </h2>
            <div className=" flex flex-col gap-1 px-[15px] mt-2 ">
              <div className=" flex  mt-1 items-center gap-1">
                <LuClock className="text-global-color-primary" />
                <span>Open 24/7</span>
              </div>
              <div className=" flex  mt-1  items-center gap-1">
                <FaPhone className="text-global-color-primary" />
                <span>(844) 254-8273</span>
              </div>
              <div className=" flex  mt-1  items-center gap-1">
                <MdOutlineMail className="text-global-color-primary" />
                <span>sales@fastguardservice.com</span>
              </div>
              <div className=" flex   mt-1 items-center gap-1">
                <FaMapMarkerAlt className="text-global-color-primary" />
                <span>
                  925 S 21 ave , Hollywood, FL, United States, Florida
                </span>
              </div>
            </div>
          </div>
        </div>
      </Div_styled>
    </footer>
  );
};

export default Footer;
const Div_styled = styled.div`
  background-image: url(https://fastguardservice.com/wp-content/uploads/2023/12/fastguardservice-hero.jpg),
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
`;
const DivSlick_Styled = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-color: #d2a52e;
  }
`;
